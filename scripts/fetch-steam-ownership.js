const axios = require('axios');
const fs = require('fs');

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const API_BASE = 'https://api.steampowered.com';

// Steam profile configurations - maps display names to Steam IDs
const STEAM_PROFILES = {
  'Liam': '76561198869752571',      // Resolved from LiamWils20
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

async function generateOwnershipData() {
  console.log('Fetching Steam ownership data...\n');

  const ownershipMap = {};

  for (const [name, steamID] of Object.entries(STEAM_PROFILES)) {
    if (!steamID || steamID === '0') {
      console.log(`⚠️  Skipping ${name} - no Steam ID configured`);
      continue;
    }

    console.log(`Fetching games for ${name}...`);
    try {
      const ownedAppIds = await getOwnedGames(steamID);
      ownershipMap[name] = ownedAppIds;
      console.log(`✓ ${name} owns ${ownedAppIds.length} games\n`);

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`✗ Error fetching games for ${name}:`, error.message);
    }
  }

  // Write the ownership map to JSON file
  fs.writeFileSync('game-ownership.json', JSON.stringify(ownershipMap, null, 2));
  console.log('\n✓ Ownership data saved to game-ownership.json');
}

generateOwnershipData().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
