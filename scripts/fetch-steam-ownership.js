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

async function getPlayerAchievements(steamID64, appId) {
  try {
    const response = await axios.get(`${API_BASE}/ISteamUserStats/GetPlayerAchievements/v1/`, {
      params: {
        key: STEAM_API_KEY,
        steamid: steamID64,
        appid: appId
      }
    });

    return response.data?.playerstats || null;
  } catch (error) {
    console.error(`Error fetching achievements for Steam ID ${steamID64}, app ${appId}:`, error.message);
    return null;
  }
}

async function hasCompletedAllAchievements(steamID64, appId) {
  const playerStats = await getPlayerAchievements(steamID64, appId);
  if (!playerStats?.success || !Array.isArray(playerStats.achievements) || playerStats.achievements.length === 0) {
    return false;
  }

  return playerStats.achievements.every(achievement => achievement.achieved === 1);
}

function getTrackedAppIdsFromScript(scriptFilePath) {
  try {
    const scriptContent = fs.readFileSync(scriptFilePath, 'utf8');
    const appIdMatches = [...scriptContent.matchAll(/\/app\/(\d+)/g)];
    return [...new Set(appIdMatches.map(match => Number.parseInt(match[1], 10)))];
  } catch (error) {
    console.error('Error reading Script.js to build tracked app list:', error.message);
    return [];
  }
}

async function generateOwnershipData() {
  console.log('Fetching Steam ownership data...\n');

  const scriptPath = path.resolve(__dirname, '..', 'Script.js');
  const trackedAppIds = getTrackedAppIdsFromScript(scriptPath);
  console.log(`Tracking achievement completion for ${trackedAppIds.length} listed games.\n`);

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

      const trackedOwnedAppIds = ownedAppIds.filter(appId => trackedAppIds.includes(appId));
      const completedAppIds = [];

      if (trackedOwnedAppIds.length > 0) {
        console.log(`Checking all-achievement completion for ${trackedOwnedAppIds.length} tracked owned games...`);
      }

      for (const appId of trackedOwnedAppIds) {
        const hasPerfectedGame = await hasCompletedAllAchievements(steamID, appId);
        if (hasPerfectedGame) {
          completedAppIds.push(appId);
        }

        // Tiny delay to reduce rate limiting risk when checking many games.
        await new Promise(resolve => setTimeout(resolve, 250));
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
