const games = [
    // Mimesis
    { title: "Mimesis",
      suggestedBy: "Samantha",
      released: "Yes!",
      mode: "Online Co-op",
      genre: ["Action", "Adventure", "Casual", "Indie", "Early Access"],
      link: "steam://openurl/http://store.steampowered.com/app/2827200/MIMESIS/",
      cover: "images/Mimesis.jpg",
    },
    // Cult of the Child Eater
    { title: "Cult of the Child Eater",
      suggestedBy: "Samantha",
      released: "Yes!",
      mode: "Single-player & Online Co-op",
      genre: ["Action", "Adventure", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3170640/Cult_of_the_Child_Eater/",
      cover: "images/Cult of the Child Eater.jpg",
    },
    // There are no Ghosts at the Grand
    { title: "There are no Ghosts at...",
      suggestedBy: "Samantha",
      released: "No! (Q4 2026)",
      genre: ["Action", "Adventure", "Indie", "RPG", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3725190/There_Are_No_Ghosts_at_the_Grand/",
      cover: "images/There are no Ghosts at the Grand.jpg",
    },
    // Zompiercer
    { title: "Zompiercer",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3725190/There_Are_No_Ghosts_at_the_Grand/",
      cover: "images/Zompiercer.jpg",
    },
    // Ritual Tides
    { title: "Ritual Tides",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Action", "Adventure", "Indie"],
      link: "steam://openurl/https://store.steampowered.com/app/3548810/Ritual_Tides/",
      cover: "images/Ritual Tides.jpg",
    },
    // Deathground
    { title: "Deathground",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1200770/Deathground/",
      cover: "images/Deathground.jpg",
    },
    // Clockwork Revolution
    { title: "Clockwork Revolution",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Adventure", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/1200770/Deathground/",
      cover: "images/Clockwork Revolution.jpg",
    },
    // Beast of Reincarnation
    { title: "Beast of Reincarnation",
      suggestedBy: "Samantha",
      released: "No! (Aug 4th 2026)",
      genre: ["Action", "Adventure", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/2001760/Beast_of_Reincarnation/",
      cover: "images/Beast of Reincarnation.jpg",
    },
    // The Mosquito Gang
    { title: "The Mosquito Gang",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/2811100/The_Mosquito_Gang/",
      cover: "images/The Mosquito Gang.jpg",
    },
    // Luma Island
    { title: "Luma Island",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Adventure", "Casual", "Indie", "RPG", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/2408820/Luma_Island/",
      cover: "images/Luma Island.jpg",
    },
    // Expedition: Into Darkness
    { title: "Expedition: Into Darkness",
      suggestedBy: "Samantha",
      released: "No! (Q4 2026)",
      genre: ["Action", "Adventure", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/3126410/Expedition_Into_Darkness/",
      cover: "images/Expedition Into Darkness.jpg",
    },
    // Begone Beast
    { title: "Begone Beast",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2192380/Begone_Beast/",
      cover: "images/Begone Beast.jpg",
    },
    // CuffBust
    { title: "CuffBust",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Adventure", "Casual", "Indie", "Strategy"],
      link: "steam://openurl/https://store.steampowered.com/app/2592220/CUFFBUST/",
      cover: "images/CuffBust.jpg",
    },
    // Cursed Companions
    { title: "Cursed Companions",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3265230/Cursed_Companions/",
      cover: "images/Cursed Companions.jpg",
    },
    // Sea of Remnants
    { title: "Sea of Remnants",
      suggestedBy: "Samantha",
      released: "No! (2026)",
      genre: ["Action", "Casual", "RPG", "Strategy", "Free to Play"],
      link: "steam://openurl/https://store.steampowered.com/app/3633680/Sea_of_Remnants/",
      cover: "images/Sea of Remnants.jpg",
    },
    // Fate Trigger
    { title: "Fate Trigger",
      suggestedBy: "Liam",
      released: "No! (2026)",
      genre: ["Action", "Adventure", "Massively Multiplayer", "Free to Play"],
      link: "steam://openurl/https://store.steampowered.com/app/3092530/Fate_Trigger/",
      cover: "images/Fate Trigger.jpg",
    },
    // Mini Royale
    { title: "Mini Royale",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Free to Play", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1657090/Mini_Royale/",
      cover: "images/Mini Royale.jpg",
    },
    // Kitchen Wars
    { title: "Kitchen Wars",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure", "Casual", "Indie"],
      link: "steam://openurl/https://store.steampowered.com/app/2955840/Kitchen_Wars/",
      cover: "images/Kitchen Wars.jpg",
    },
    // Bum Revenge
    { title: "Bum Revenge",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3702930/Bum_Revenge/",
      cover: "images/Bum Revenge.jpg",
    },
    // Kaiju Cleanup
    { title: "Kaiju Cleanup",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3729700/Kaiju_Cleanup/",
      cover: "images/Kaiju Cleanup.jpg",
    },
    // Lockdown Protocol
    { title: "Lockdown Protocol",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Casual", "Indie", "Strategy"],
      link: "steam://openurl/https://store.steampowered.com/app/2780980/LOCKDOWN_Protocol/",
      cover: "images/Lockdown Protocol.jpg",
    },
    // Core Keeper
    { title: "Core Keeper",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "RPG", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/1621690/Core_Keeper/",
      cover: "images/Core Keeper.jpg",
    },
    // A Merchants Promise
    { title: "A Merchants Promise",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Indie", "Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2932960/A_Merchants_Promise/",
      cover: "images/A Merchants Promise.jpg",
    },
    // Survival Machine
    { title: "Survival Machine",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Adventure", "Casual", "Indie", "Simulation", "Free to Play", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1601330/Survival_Machine/",
      cover: "images/Survival Machine.jpg",
    },
    // Fable
    { title: "Fable",
      suggestedBy: "Liam, TJ, Samantha, Cody",
      released: "No! (23rd Feb 2027)",
      genre: ["Action", "Adventure", "Casual", "Indie", "Simulation", "Free to Play", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2769570/Fable/",
      cover: "images/Fable.jpg",
    },
    // Returnal
    { title: "Returnal",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action"],
      link: "steam://openurl/https://store.steampowered.com/app/1649240/?snr=1_5_9__205",
      cover: "images/Returnal.jpg",
    },
    // Vein
    { title: "Vein",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "RPG", "Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1857950/VEIN/",
      cover: "images/Vein.jpg",
    },
    // Scum
    { title: "Scum",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Massively Multiplayer"],
      link: "steam://openurl/https://store.steampowered.com/app/513710/SCUM/",
      cover: "images/Scum.jpg",
    },
    // Cleaner Company
    { title: "Cleaner Company",
      suggestedBy: "Liam",
      released: "No! (2026)",
      genre: ["Adventure", "Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3644020/Cleaner_Company/",
      cover: "images/Cleaner Company.jpg",
    },
    // Shift at Midnight
    { title: "Shift at Midnight",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3722330/Shift_At_Midnight/",
      cover: "images/Shift at Midnight.jpg",
    },
    // Butcher Shop Simulator
    { title: "Butcher Shop Simulator",
      suggestedBy: "Liam",
      released: "No! (Q3 2026)",
      genre: ["Casual", "Indie", "Simulation", "Free To Play"],
      link: "steam://openurl/https://store.steampowered.com/app/4380740/Butcher_Shop_Simulator/",
      cover: "images/Butcher Shop Simulator.jpg",
    },
    // Moonshiner Simulator
    { title: "Moonshiner Simulator",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Simulation", "Strategy", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/4179280/Moonshiner_Simulator/",
      cover: "images/Moonshiner Simulator.jpg",
    },
    // Solarpunk
    { title: "Solarpunk",
      suggestedBy: "Liam, Cody & TJ",
      released: "Yes!",
      genre: ["Adventure", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/1805110/Solarpunk/",
      cover: "images/Solarpunk.jpg",
    },
    // Palworld: Palfarm
    { title: "Palworld: Palfarm",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Adventure", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4031890/Palworld_Palfarm/",
      cover: "images/Palworld_Palfarm.jpg",
    },
    // Super Battle Golf
    { title: "Super Battle Golf",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Casual", "Indie", "Sports"],
      link: "steam://openurl/https://store.steampowered.com/app/4069520/Super_Battle_Golf/",
      cover: "images/Super Battle Golf.jpg",
    },
    // Last Flag
    { title: "Last Flag",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action"],
      link: "steam://openurl/https://store.steampowered.com/app/2721340/Last_Flag/",
      cover: "images/Last Flag.jpg",
    },
    // Ghost Janitors
    { title: "Ghost Janitors",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie"],
      link: "steam://openurl/https://store.steampowered.com/app/2772990/Ghost_Janitors/",
      cover: "images/Ghost Janitors.jpg",
    },
    // Enshrouded
    { title: "Enshrouded",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "RPG", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1203620/Enshrouded/",
      cover: "images/Enshrouded.jpg",
    },
    // Restaurats
    { title: "Restaurats",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Casual", "Indie", "RPG", "Simulation", "Strategy"],
      link: "steam://openurl/https://store.steampowered.com/app/2870920/Restaurats/",
      cover: "images/Restaurats.jpg",
    },
    // Sunkenland
    { title: "Sunkenland",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2080690/Sunkenland/",
      cover: "images/Sunkenland.jpg",
    },
    // Jump Space
    { title: "Jump Space",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1757300/Jump_Space/",
      cover: "images/Jump Space.jpg",
    },
    // Ship Graveyard Simulator 2
    { title: "Ship Graveyard Simulator 2",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure", "Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/2201940/Ship_Graveyard_Simulator_2/",
      cover: "images/Ship Graveyard Simulator 2.jpg",
    },
    // Beer Manufacturer Simulator
    { title: "Beer Manufacturer Simulator",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3809410/Beer_Manufacture_Simulator/",
      cover: "images/Beer Manufacturer Simulator.jpg",
    },
    // Lightyear Frontier
    { title: "Lightyear Frontier",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1677110/Lightyear_Frontier/",
      cover: "images/Lightyear Frontier.jpg",
    },
    // Liar's Bar
    { title: "Liar's Bar",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Casual", "Indie", "Simulation", "Strategy", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3097560/Liars_Bar/",
      cover: "images/Liar's Bar.jpg",
    },
    // Imposters
    { title: "Imposters",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Action", "Simulation", "Strategy"],
      link: "steam://openurl/https://store.steampowered.com/app/3825850/Imposters/",
      cover: "images/Imposters.jpg",
    },
    // Astera
    { title: "Astera",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Action", "Indie", "Massively Multiplayer", "RPG", "Free To Play"],
      link: "steam://openurl/https://store.steampowered.com/app/2866330/?snr=1_5_9__205",
      cover: "images/Astera.jpg",
    },
    // RoadCraft
    { title: "RoadCraft",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Adventure", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/2104890/RoadCraft/",
      cover: "images/RoadCraft.jpg",
    },
    // Lort
    { title: "Lort",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2956680/LORT/",
      cover: "images/Lort.jpg",
    },
    // Starship EVO
    { title: "Starship EVO",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/711980/Starship_EVO/",
      cover: "images/Starship EVO.jpg",
    },
    // ORMOD: Directive
    { title: "ORMOD: Directive",
      suggestedBy: "Liam",
      released: "No! (2026)",
      genre: ["Action", "Adventure", "Indie", "Massively Multiplayer", "RPG", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3424730/ORMOD_Directive/",
      cover: "images/ORMOD Directive.jpg",
    },
    // Fuel Harvest Together
    { title: "Fuel Harvest Together",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3441460/Fuel_Harvest_Together/",
      cover: "images/Fuel Harvest Together.jpg",
    },
    // Windrose
    { title: "Windrose",
      suggestedBy: "Liam, TJ, Samantha, Cody",
      released: "Yes!",
      genre: ["Action", "Adventure", "RPG", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3041230/Windrose/?snr=1_4_4__118",
      cover: "images/Windrose.jpg",
    },
    // Pragmata
    { title: "Pragmata",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/3357650/PRAGMATA/?snr=1_4_4__118",
      cover: "images/Pragmata.jpg",
    },
    // Everwind
    { title: "Everwind",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Adventure", "Indie", "RPG", "Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2253100/Everwind/",
      cover: "images/Everwind.jpg",
    },
    // Cartel Pilots Wanted
    { title: "Cartel Pilots Wanted",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4614080/Cartel_Pilots_Wanted/",
      cover: "images/Cartel Pilots Wanted.jpg",
    },
    // Black Flag Resynced
    { title: "Black Flag Resynced",
      suggestedBy: "Liam, TJ, Samantha, Cody",
      released: "Yes!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/3751950/Assassins_Creed_Black_Flag_Resynced/",
      cover: "images/Black Flag Resynced.jpg",
    },
    // Vampire Crawlers
    { title: "Vampire Crawlers",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Indie", "Strategy"],
      link: "steam://openurl/https://store.steampowered.com/app/3265700/Vampire_Crawlers_The_Turbo_Wildcard_from_Vampire_Survivors/",
      cover: "images/Vampire Crawlers.jpg",
    },
    // Invincible VS
    { title: "Invincible VS",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/2353060/Invincible_VS/",
      cover: "images/Invincible VS.jpg",
    },
    // Primal Repairs
    { title: "Primal Repairs",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4090310/Primal_Repairs/",
      cover: "images/Primal Repairs.jpg",
    },
    // Blades of Fire
    { title: "Blades of Fire",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/2091020/Blades_of_Fire/",
      cover: "images/Blades of Fire.jpg",
    },
    // Chronicles: Medieval
    { title: "Chronicles: Medieval",
      suggestedBy: "Liam",
      released: "No! (2026)",
      genre: ["Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/2231020/Chronicles_Medieval/",
      cover: "images/Chronicles Medieval.jpg",
    },
    // Megastore Simulator
    { title: "Megastore Simulator",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Casual", "Indie", "Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3819640/Megastore_Simulator/",
      cover: "images/Megastore Simulator.jpg",
    },
    // Schrodinger's Cat Burglar
    { title: "Schrodinger's Cat Burglar",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Adventure", "Indie"],
      link: "steam://openurl/https://store.steampowered.com/app/2111550/Schrodingers_Cat_Burglar/",
      cover: "images/Schrodingers Cat Burglar.jpg",
    },
    // Far Far West
    { title: "Far Far West",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3124540/Far_Far_West/",
      cover: "images/Far Far West.jpg",
    },
    // Librarian: Tidy Up the Arcane Library
    { title: "Librarian: Tidy Up the...",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4197610/Librarian_Tidy_Up_the_Arcane_Library/?queue=1",
      cover: "images/Librarian Tidy Up the Arcane Library.jpg",
    },
    // Bus Bound
    { title: "Bus Bound",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/2095420/Bus_Bound/?queue=1",
      cover: "images/Bus Bound.jpg",
    },
    // Space Craft
    { title: "Space Craft",
      suggestedBy: "Liam",
      released: "No! (11 Jun 2026)",
      genre: ["Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3276050/SpaceCraft/",
      cover: "images/Space Craft.jpg",
    },
    // CURE: A Hospital Simulator
    { title: "CURE: A Hospital Simulator",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2786550/CURE__A_Hospital_Simulator/",
      cover: "images/CURE A Hospital Simulator.jpg",
    },
    // Rest Area Simulator
    { title: "Rest Area Simulator",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/3732960/Rest_Area_Simulator/",
      cover: "images/Rest Area Simulator.jpg",
    },
    // Species: Unknown
    { title: "Species: Unknown",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2747330/Species_Unknown/",
      cover: "images/Species Unknown.jpg",
    },
    // Wyldheart
    { title: "Wyldheart",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Action", "Adventure", "RPG", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3642910/Wyldheart/?queue=1",
      cover: "images/Wyldheart.jpg",
    },
    // Shark Mart
    { title: "Shark Mart",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Casual", "Indie", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4704000/Shark_Mart/",
      cover: "images/Shark Mart.jpg",
    },
    // NAKWON: Last Paradise
    { title: "NAKWON: Last Paradise",
      suggestedBy: "Cody",
      released: "No!",
      genre: ["Action", "RPG", "Simulation", "Strategy"],
      link: "steam://openurl/https://store.steampowered.com/app/2582960/NAKWON_LAST_PARADISE/",
      cover: "images/NAKWON Last Paradise.jpg",
    },
    // 007 First Light
    { title: "007 First Light",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/3768760/007_First_Light/",
      cover: "images/007 First Light.jpg",
    },
    // Warhammer 40,000: Space Marine 2
    { title: "Warhammer 40,000: Space...",
      suggestedBy: "Cody",
      released: "Yes!",
      genre: ["Action", "Adventure", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/?curator_clanid=34274830",
      cover: "images/Warhammer 40,000 Space Marine 2.jpg",
    },
    // Lego Batman: Legacy of the Dark Knight
    { title: "Lego Batman: Legacy of...",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/2215200/LEGO_Batman_Legacy_of_the_Dark_Knight/?snr=1_4_4__118",
      cover: "images/Lego Batman Legacy of the Dark Knight.jpg",
    },
    // Canyons
    { title: "Canyons",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Action", "Adventure", "Indie", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/2708860/Canyons/",
      cover: "images/Canyons.jpg",
    },
    // Expresslane
    { title: "ExpressLane",
      suggestedBy: "Liam",
      released: "No!",
      genre: ["Action", "Adventure", "Free To Play", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2071630/ExpressLane/",
      cover: "images/ExpressLane.jpg",
    },
    // Beautiful Light
    { title: "Beautiful Light",
      suggestedBy: "Blake",
      released: "No! (Dec 2026)",
      genre: ["Action", "Indie", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/1313230/Beautiful_Light/",
      cover: "images/Beautiful Light.jpg",
    },
    // Smithworks
    { title: "Smithworks",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Casual", "Free To Play", "Indie"],
      link: "steam://openurl/https://store.steampowered.com/app/1568540/Smithworks/",
      cover: "images/Smithworks.jpg",
    },
    // Last Harbor
    { title: "Last Harbor",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Adventure", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4369620/Last_Harbor/",
      cover: "images/Last Harbor.jpg",
    },
    // I Know a Guy: Shady Life Simulator
    { title: "I Know a Guy: Shady Life...",
      suggestedBy: "Samantha",
      released: "Yes!",
      genre: ["Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/4173620/I_Know_a_Guy_Shady_Life_Simulator/",
      cover: "images/I Know a Guy Shady Life Simulator.jpg",
    },
    // Magicians: The Devils Deal
    { title: "Magicians: The Devils Deal",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/3299300/Magicians_The_Devils_Deal/",
      cover: "images/Magicians The Devils Deal.jpg",
    },
    // Car For Sale Together
    { title: "Car For Sale Together",
      suggestedBy: "Samantha",
      released: "No! (2026)",
      genre: ["Indie", "Racing", "Simulation", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3765640/Car_For_Sale_Together/",
      cover: "images/Car For Sale Together.jpg",
    },
    // Pipes.exe
    { title: "Pipes.exe",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/3688240/Pipesexe/",
      cover: "images/Pipes.jpg",
    },
    // 7 Days to Die
    { title: "7 Days to Die",
      suggestedBy: "Everyone",
      released: "Yes!",
      genre: ["Action", "Adventure", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/251570/7_Days_to_Die/",
      cover: "images/7 Days to Die.jpg",
    },
    // Voidling Bound
    { title: "Voidling Bound",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Adventure", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/2004680/Voidling_Bound/",
      cover: "images/Voidling Bound.jpg",
    },
    // Enginefall
    { title: "Enginefall",
      suggestedBy: "Samantha",
      released: "No! (2026)",
      genre: ["Action", "Adventure", "Indie", "Massively Multiplayer"],
      link: "steam://openurl/https://store.steampowered.com/app/2437390/Enginefall/",
      cover: "images/Enginefall.jpg",
    },
    // Tale's Edge
    { title: "Tale's Edge",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Adventure", "Indie", "RPG"],
      link: "steam://openurl/https://store.steampowered.com/app/3752650/Tales_Edge/",
      cover: "images/Tale's Edge.jpg",
    },
    // HAEX
    { title: "HAEX",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Adventure", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3524720/HAEX/",
      cover: "images/HAEX.jpg",
    },
    // Witchspire
    { title: "Witchspire",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Action", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/3156770/Witchfire/",
      cover: "images/Witchspire.jpg",
    },
    // Crossfire
    { title: "Crossfire",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Action", "Adventure"],
      link: "steam://openurl/https://store.steampowered.com/app/4687500/Crossfire/",
      cover: "images/Crossfire.jpg",
    },
    // Global Rescue
    { title: "Global Rescue",
      suggestedBy: "Liam",
      released: "Yes!",
      genre: ["Simulation", "Strategy", "Early Access"],
      link: "steam://openurl/https://store.steampowered.com/app/2873660/Global_Rescue/",
      cover: "images/Global Rescue.jpg",
    },
    // Meccha Chameleon
    { title: "Meccha Chameleon",
      suggestedBy: "Everyone",
      released: "Yes!",
      genre: ["Casual"],
      link: "steam://openurl/https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
      cover: "images/Meccha Chameleon.jpg",
    },
    // Commie Bobrs
    { title: "Commie Bobrs",
      suggestedBy: "Samantha",
      released: "No!",
      genre: ["Adventure", "Simulation"],
      link: "steam://openurl/https://store.steampowered.com/app/4518240/Commie_Bobrs/",
      cover: "images/Commie Bobrs.jpg",
    },
];

// Extract Steam App ID from link
function extractSteamAppId(link) {
  const match = link.match(/\/app\/(\d+)/);
  return match ? parseInt(match[1]) : null;
}

// Add steamAppId to each game
games.forEach(game => {
  game.steamAppId = extractSteamAppId(game.link);
});

// Load ownership data
let ownershipData = {};
fetch('game-ownership.json')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(data => {
    ownershipData = data;
    console.log('✓ Ownership data loaded:', ownershipData);
    // Debug: log first owner's avatar
    const firstOwner = Object.entries(ownershipData)[0];
    if (firstOwner) {
      console.log(`First owner (${firstOwner[0]}):`, firstOwner[1]);
      console.log(`Avatar URL: ${firstOwner[1].profile?.avatar}`);
    }
    renderGames();
  })
  .catch(error => {
    console.error('✗ Error loading ownership data:', error);
    renderGames(); // Still render games even if ownership data fails
  });

function getGameOwners(steamAppId) {
  const owners = [];
  for (const [person, personData] of Object.entries(ownershipData)) {
    const appIds = personData.appIds || [];
    const completedAppIds = personData.completedAppIds || [];
    if (appIds.includes(steamAppId)) {
      owners.push({
        name: person,
        avatar: personData.profile?.avatar || '',
        profileUrl: personData.profile?.profileUrl || '',
        hasPerfectedGame: completedAppIds.includes(steamAppId)
      });
    }
  }
  return owners;
}

function renderGames(filter = {}) {
  const grid = document.getElementById("gameGrid");
  grid.innerHTML = "";

    const filtered = games.filter(game => {
        const gameOwners = getGameOwners(game.steamAppId);
        const ownerNames = gameOwners.map(o => o.name);
        return (!filter.search || game.title.toLowerCase().includes(filter.search)) &&
            (!filter.suggestedBy || game.suggestedBy.includes(filter.suggestedBy)) &&
            (!filter.released || game.released.startsWith(filter.released)) &&
            (!filter.mode || game.genre.includes(filter.mode)) &&
            (!filter.genre || game.genre.includes(filter.genre)) &&
            (!filter.ownedBy || ownerNames.includes(filter.ownedBy));
    });

    filtered.sort((a, b) => a.title.localeCompare(b.title));

  filtered.forEach(game => {
    const gameOwners = getGameOwners(game.steamAppId);
    const ownersHtml = gameOwners.length > 0 
      ? gameOwners.map(owner => `
          <a href="${owner.profileUrl}" target="_blank" class="owner-avatar${owner.hasPerfectedGame ? ' perfected' : ''}" title="${owner.name}${owner.hasPerfectedGame ? ' (Perfected)' : ''}">
            <img src="${owner.avatar}" alt="${owner.name}" onerror="this.src='https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg'" />
          </a>
        `).join('')
      : '<span class="no-owners">Not owned yet</span>';
    
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
        <img src="${game.cover}" alt="${game.title}" />
        <div class="game-info">
            <h3><span class="gold">${game.title}</span></h3>
            <p><strong>Suggested by:</strong> ${game.suggestedBy || "TBD"}</p>
            <p><strong>Released:</strong> ${game.released || "TBD"}</p>
            <div class="owners-section">
              <strong>Owned by:</strong>
              <div class="owner-avatars">
                ${ownersHtml}
              </div>
            </div>
        </div>
        <a class="btn-card" href="${game.link || '#'}" target="_blank">Learn More <span>↗</span></a>
    `;

    grid.appendChild(card);
  });
}

document.querySelectorAll(".filters input, .filters select").forEach(el => {
  el.addEventListener("input", () => {
    renderGames({
      search: document.getElementById("search").value.toLowerCase(),
      suggestedBy: document.getElementById("suggestedBy").value,
      released: document.getElementById("released").value,
      mode: document.getElementById("mode").value,
      genre: document.getElementById("genre").value,
      ownedBy: document.getElementById("ownedBy") ? document.getElementById("ownedBy").value : "",
    });
  });
});

function renderStars(count) {
  const full = "★".repeat(count);
  const empty = "☆".repeat(5 - count);
  return `<span>${full}${empty}</span>`;
}

function getStatusClass(status) {
  const normalized = status.toLowerCase();
  if (normalized.includes("currently watching")) return "active";
  if (normalized.includes("watched")) return "completed";
  if (normalized.includes("queued")) return "queued";
  return "default";
}

renderGames();