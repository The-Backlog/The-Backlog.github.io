const axios = require('axios');
const fs = require('fs');
const path = require('path');

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const API_BASE = 'https://api.steampowered.com';

// Steam profile configurations - maps display names to Steam IDs
const STEAM_PROFILES = {
  'Liam': '76561198372734945',      // Resolved from LiamWils20
  'TJ': '76561199592608803',
  'Samantha': '76561199503509214',
  'Cody': '76561198886488879',
  'Blake': '76561199595551635' 
};

async function getSteamID64FromVanityName(vanityName) {
  try {
    const response = await axios.get(`${API_BASE}/ISteamUser/ResolveVanityURL/v1/`, {
      params: {
        key: STEAM_API_KEY,
        vanityurl: vanityName
      }
    });

    if (response.data.response.success === 1) {
      return response.data.response.steamid;
    }
    return null;
  } catch (error) {
    console.error(`Error resolving vanity URL for ${vanityName}:`, error.message);
    return null;
  }
}

async function getPlayerSummary(steamID64) {
  try {
    const response = await axios.get(`${API_BASE}/ISteamUser/GetPlayerSummaries/v2/`, {
      params: {
        key: STEAM_API_KEY,
        steamids: steamID64
      }
    });

    if (response.data.response && response.data.response.players && response.data.response.players.length > 0) {
      const player = response.data.response.players[0];
      // Use avatar_medium, fall back to avatarfull or avatarmedium, or construct from Steam ID
      const avatar = player.avatarfull || player.avatar || `https://avatars.steamstatic.com/${steamID64}_medium.jpg`;
      return {
        name: player.personaname || 'Unknown',
        avatar: avatar,
        profileUrl: player.profileurl || `https://steamcommunity.com/profiles/${steamID64}/`
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching player summary for Steam ID ${steamID64}:`, error.message);
    return null;
  }
}

async function getOwnedGames(steamID64) {
  try {
    const response = await axios.get(`${API_BASE}/IPlayerService/GetOwnedGames/v1/`, {
      params: {
        key: STEAM_API_KEY,
        steamid: steamID64,
        include_appinfo: false
      }
    });

    if (response.data.response && response.data.response.games) {
      return response.data.response.games.map(game => game.appid);
    }
    return [];
  } catch (error) {
    console.error(`Error fetching games for Steam ID ${steamID64}:`, error.message);
    return [];
  }
}

async function hasCompletedAllAchievements(steamID64, appId) {
  try {
    const response = await axios.get(`${API_BASE}/ISteamUserStats/GetPlayerAchievements/v0001/`, {
      params: {
        key: STEAM_API_KEY,
        steamid: steamID64,
        appid: appId
      }
    });

    const playerstats = response.data?.playerstats;
    if (!playerstats || playerstats.success === false) {
      return false;
    }

    const achievements = playerstats?.achievements;

    // If a game has no achievements, or they are not publicly available, it cannot be "perfected".
    if (!Array.isArray(achievements) || achievements.length === 0) {
      return false;
    }

    return achievements.every(achievement => achievement.achieved === 1 || achievement.achieved === true);
  } catch (error) {
    // Steam returns errors for private data, missing stats, or unsupported apps; treat as not perfected.
    return false;
  }
}

function getTrackedAppIdsFromScript(scriptPath) {
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  const appIdMatches = [...scriptContent.matchAll(/\/app\/(\d+)/g)];
  return [...new Set(appIdMatches.map(match => parseInt(match[1], 10)).filter(Number.isFinite))];
}

async function generateOwnershipData() {
  console.log('Fetching Steam ownership data...\n');

  const rootScriptPath = path.resolve(__dirname, '..', 'Script.js');
  const trackedAppIds = getTrackedAppIdsFromScript(rootScriptPath);
  const trackedAppIdSet = new Set(trackedAppIds);
  console.log(`Tracking ${trackedAppIds.length} app IDs from Script.js\n`);

  const ownershipMap = {};
  const playerProfiles = {};

  // First pass: get player summaries
  for (const [name, steamID] of Object.entries(STEAM_PROFILES)) {
    if (!steamID || steamID === '0') {
      console.log(`⚠️  Skipping ${name} - no Steam ID configured`);
      continue;
    }

    console.log(`Fetching profile for ${name}...`);
    try {
      const playerSummary = await getPlayerSummary(steamID);
      if (playerSummary) {
        playerProfiles[name] = playerSummary;
        console.log(`✓ Profile fetched: ${playerSummary.name}`);
        console.log(`  Avatar URL: ${playerSummary.avatar.substring(0, 60)}...`);
        console.log(`  Profile URL: ${playerSummary.profileUrl}\n`);
      } else {
        console.log(`⚠️  No profile data returned for ${name}, using fallback\n`);
        // Fallback profile data
        playerProfiles[name] = {
          name: name,
          avatar: `https://avatars.steamstatic.com/${steamID}_medium.jpg`,
          profileUrl: `https://steamcommunity.com/profiles/${steamID}/`
        };
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ Error fetching profile for ${name}:`, error.message);
      // Add fallback even on error
      playerProfiles[name] = {
        name: name,
        avatar: `https://avatars.steamstatic.com/${steamID}_medium.jpg`,
        profileUrl: `https://steamcommunity.com/profiles/${steamID}/`
      };
    }
  }

  // Second pass: get owned games
  for (const [name, steamID] of Object.entries(STEAM_PROFILES)) {
    if (!steamID || steamID === '0') {
      continue;
    }

    console.log(`Fetching games for ${name}...`);
    try {
      const ownedAppIds = await getOwnedGames(steamID);
      const ownedTrackedAppIds = ownedAppIds.filter(appId => trackedAppIdSet.has(appId));
      const completedAppIds = [];

      for (const appId of ownedTrackedAppIds) {
        const perfected = await hasCompletedAllAchievements(steamID, appId);
        if (perfected) {
          completedAppIds.push(appId);
        }
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      ownershipMap[name] = {
        appIds: ownedAppIds,
        completedAppIds,
        profile: playerProfiles[name] || {
          name: name,
          avatar: `https://avatars.steamstatic.com/${steamID}_medium.jpg`,
          profileUrl: `https://steamcommunity.com/profiles/${steamID}/`
        }
      };
      console.log(`✓ ${name} owns ${ownedAppIds.length} games (${completedAppIds.length} perfected tracked games)\n`);

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ Error fetching games for ${name}:`, error.message);
      // Still add entry even if games fetch fails
      ownershipMap[name] = {
        appIds: [],
        completedAppIds: [],
        profile: playerProfiles[name] || {
          name: name,
          avatar: `https://avatars.steamstatic.com/${steamID}_medium.jpg`,
          profileUrl: `https://steamcommunity.com/profiles/${steamID}/`
        }
      };
    }
  }

  // Write the ownership map to JSON file
  fs.writeFileSync('game-ownership.json', JSON.stringify(ownershipMap, null, 2));
  console.log('\n✓ Ownership data saved to game-ownership.json');
  console.log(`\nSummary: ${Object.keys(ownershipMap).length} profiles processed`);
}

generateOwnershipData().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
