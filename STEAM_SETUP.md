# Game Ownership System Setup Guide

## Overview
This system automatically fetches who owns each game from Steam profiles and displays it on your game backlog page. It updates weekly using GitHub Actions.

## Setup Steps

### 1. Get a Steam Web API Key
1. Go to https://steamcommunity.com/dev/apikey
2. Sign in with your Steam account
3. Accept the agreement
4. Copy your API key

### 2. Add API Key to GitHub Secrets
1. Go to your GitHub repository settings: **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `STEAM_API_KEY`
4. Value: Paste your Steam API key
5. Click **Add secret**

### 3. Update Steam Profile IDs
Edit `scripts/fetch-steam-ownership.js` and update the `STEAM_PROFILES` object with the correct Steam IDs:

```javascript
const STEAM_PROFILES = {
  'Liam': '76561198869752571',      // Your Steam ID (you have this already)
  'TJ': '76561199592608803',        // Update with TJ's Steam ID
  'Samantha': '76561199503509214',  // Update with Samantha's Steam ID
  'Cody': '76561198886488879',      // Update with Cody's Steam ID
  'Blake': '0'                       // Add Blake's Steam ID
};
```

**How to get Steam IDs:**
- Visit someone's Steam profile
- Copy the URL: `https://steamcommunity.com/profiles/76561198869752571/`
- The long number is their Steam ID

Alternatively, use a vanity URL lookup. If their profile is `https://steamcommunity.com/id/username/`, you can use the username.

### 4. Manual Testing (Optional)
To test locally before committing:
```bash
cd scripts
npm install axios
STEAM_API_KEY=your_api_key node fetch-steam-ownership.js
```

This will generate `game-ownership.json` in the root directory.

## How It Works

1. **Weekly Update**: GitHub Actions runs every Sunday at midnight UTC
2. **Steam API Calls**: Fetches each person's game library from Steam
3. **Data Generation**: Creates `game-ownership.json` mapping people to app IDs they own
4. **Auto-Push**: Commits changes back to the repo automatically

## Files Added

- `.github/workflows/update-game-ownership.yml` - GitHub Actions workflow
- `scripts/fetch-steam-ownership.js` - Node.js script to fetch ownership data
- `game-ownership.json` - Generated data file (updates automatically)

## Changes to Existing Files

- `Script.js` - Added ownership data loading and filtering
- `index.html` - Added "Owned by" filter dropdown

## Troubleshooting

### Workflow not running?
- Check **Actions** tab in your GitHub repo
- Verify the `STEAM_API_KEY` secret is set
- Check workflow file syntax in `.github/workflows/update-game-ownership.yml`

### No ownership data showing?
- Verify Steam IDs are correct (not usernames)
- Ensure Steam profiles are set to "Public" for library visibility
- Check `game-ownership.json` file exists in the repo root

### Manual update
Click the **Run workflow** button in the **Actions** tab to trigger immediately.

## Important Notes

⚠️ **Steam Profile Privacy**: The script can only access games from users with **public** Steam libraries.

🔄 **Update Frequency**: Set in the workflow file - currently `0 0 * * 0` (Sunday midnight UTC)

🎮 **Free Games**: Free-to-play games are included in ownership data

## Next Steps

1. Commit your changes to GitHub
2. Add the Steam API key to secrets
3. Update Steam profile IDs in the script
4. Push to trigger the workflow
5. Check the Actions tab to monitor the first run
