'use client'

interface ModVersion {
    version: string;
    downloadLink: string;
    altDownload?: string;
    changelog?: string;
}

interface Mod {
    name: string;
    shortDescription?: string;
    description?: string;
    tags: string[];
    versions: ModVersion[];
    id: string;
}

export const mods: Mod[] = [
    {
        name: "Nulls Brawl",
        description: `
## Unlimited resources

You have unlimited gems, gold and boxes. If you don't want to spend your time there are some free magic boxes waiting you in the shop.

## All Brawlers and Skins

You can choose any brawler and skin to make some screenshots to share with your friends. Let them envy you.
## Multiplayer

Bots are... boring. Luckily, we have great multiplayer support so you can play with you friends without any lag.

## Fast Updates
We are trying to add new brawlers and features as fast as possible. Sometimes it takes only few days!`,
        shortDescription: "Null's Brawl is a Brawl Stars private server with unlimited gems, gold and boxes. Play with friends on any brawler you want.",
        tags: ["Private server", "Supports iOS"],
        id: "nulls",
        versions: [
            {
                version: "V60 for Android",
                downloadLink: "https://dnull.xyz/latest_bs",
                
            },
            {
                version: "V59 for iOS",
                downloadLink: "https://dnull.xyz/latest_bs_i",
                altDownload: "https://dl.natesworks.com/brawlmods/nullsbrawl/nb59.197_ecd6d17a.ipa"
            }
        ]
    },
    {
        name: "Magic Brawl",
        shortDescription: "Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!",
        tags: ["Private server", "Supports iOS"],
        id: "magic",
        versions: [
            {
                version: "V43",
                downloadLink: "https://files.magic-servers.xyz/mb.apk",
                altDownload: "https://download.natesworks.com/brawlmods/magicbrawl/mb.apk"
            },
            {
                version: "V43 for iOS",
                downloadLink: "https://files.magic-servers.xyz/mb.ipa",
                altDownload: "https://download.natesworks.com/brawlmods/magicbrawl/mb.ipa"
            }
        ]
    },
    {
        name: "Retro Brawl",
        shortDescription: "Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!",
        tags: ["Private server", "Supports iOS"],
        id: "retro",
        versions: [
            {
                version: "V12 for Android",
                downloadLink: "https://files.magic-servers.xyz/retrobrawl.apk"
            },
            {
                version: "V12 for iOS",
                downloadLink: "https://files.magic-servers.xyz/retrobrawl.ipa"
            }
        ]
    },
    {
        name: "Tale Stars",
        shortDescription: "V59 mod menu with xray, kit hack and more!",
        tags: ["Official server"],
        id: "tale",
        versions: [
            {
                version: "V1.1",
                downloadLink: "https://dl.natesworks.com/brawlmods/tale/Tale+Stars_59.197_v1.1.apk"
            }
        ]
    },
    {
        name: "BSD Brawl",
        shortDescription: "Allows changing server region, viewing enemies ammo and more!",
        tags: ["Official server"],
        id: "bsd",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlmods/bsdbrawl/bsd_brawl_v59.197_(28).apk"
            }
        ]
    },
    {
        name: "Gene Brawl",
        shortDescription: "Adds a debug menu allowing you to visually unlock all brawlers and more!",
        tags: ["Official server"],
        id: "gene",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlmods/genebrawl/genebrawl_v59.apk"
            }
        ]
    },
    {
        name: "Switchgear",
        shortDescription: "An official server mod similar to BSD and Gene with more features.",
        tags: ["Official server"],
        id: "switchgear",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/switchgear/Switchgear-59-4.apk",
            }
        ]
    },
    {
        name: "Surge Offline",
        shortDescription: "An offline version of Brawl Stars V28! Allows you to open boxes to unlock brawlers, gain trophies and play any mode. It also adds new skins and 3rd star powers for some brawlers",
        tags: ["Offline"],
        id: "sb",
        versions: [
            {
                version: "V1.3 Amethyst",
                downloadLink: "https://dl.natesworks.com/brawlmods/surgeoffline/surgeoffline-amethyst.apk"
            }
        ]
    },
    {
        name: "Cool Brawl",
        shortDescription: "Adds mod menu, new skins, a new brawler and more.",
        tags: ["Offline"],
        id: "cool",
        versions: [
            {
                version: "V2.1.0",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/coolbrawl/Cool+Brawl_v2.1.0.apk"
            }
        ]
    },
    {
        name: "Fideua Brawl",
        shortDescription: "The BEST v12 private server with custom brawlers, skins and more!",
        tags: ["Private server", "Supports iOS"],
        id: "fiedua",
        versions: [
            {
                version: "V1 for Android",
                downloadLink: "https://dl.natesworks.com/brawlmods/fieduabrawl/fieduabrawl.apk"
            },
            {
                version: "V1 for iOS",
                downloadLink: "https://dl.natesworks.com/brawlmods/fieduabrawl/fieduabrawl.ipa"
            }
        ]
    },
    {
        name: "Original Brawl",
        shortDescription: "Play and mod many versions of Brawl Stars. No need to host your own server!",
        tags: ["Private server", "Supports iOS"],
        id: "originalbrawl",
        versions: [
            {
                version: "V2 for iOS",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v2.57.ipa"
            },
            {
                version: "V19",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v19.111.apk"
            },
            {
                version: "V25",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v25.107.apk"
            },
            {
                version: "V26",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v26.165.apk"
            },
            {
                version: "V28",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v28.189.apk"
            },
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v29.apk"
            },
            {
                version: "V53",
                downloadLink: "https://dl.natesworks.com/brawlmods/originalbrawl/Original%20Brawl%20v53.176"
            }
        ]
    },
    {
        name: "Private Server Clients",
        shortDescription: "Brawl Stars clients for connecting to private servers.",
        tags: ["Selfhost", "Supports iOS"],
        id: "privateserverclients",
        versions: [
            {
                version: "V11",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v11/v11.apk"
            },
            {
                version: "V12",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v12/v12.apk"
            },
            {
                version: "V15",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v15/v15.apk"
            },
            {
                version: "V18",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v18/v18.apk"
            },
            {
                version: "V19",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v19/v19.apk"
            },
            {
                version: "V22",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v22/v22.apk"
            },
            {
                version: "V23",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v23/v23.apk"
            },
            {
                version: "V24",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v24/v24.apk"
            },
            {
                version: "V27",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v27/v27.apk"
            },
            {
                version: "V28",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v28/v28.apk"
            },
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlstars/clients/v29/v29.apk"
            },
            {
                version: "V41",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v41150.apk"
            },
            {
                version: "V42",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v42333.apk"
            },
            {
                version: "V43",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v43229.apk"
            },
            {
                version: "V44",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v44226.apk"
            },
            {
                version: "V45",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/com.projectbsds.v45225.apk"
            },
        ]
    },
    {
        name: "HDR Brawl",
        shortDescription: "BSD with HDR graphics and outline removed.",
        tags: ["Official server", "Nulls Brawl assets"],
        id: "hdr",
        versions: [
            {
                version: "V59",
                downloadLink: "https://dl.natesworks.com/brawlmods/hdrbrawl/Telegram%20-%20@hdrbrawl.apk"
            },
            {
                version: "Nulls Brawl Assets",
                downloadLink: "https://dl.natesworks.com/brawlmods/hdrbrawl/Telegram%20-%20@hdrbrawl.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Brawler Maker",
        shortDescription: "A tool that can automatically create a brawler from start to finish without any modding knowledge required.",
        tags: ["Utilities"],
        id: "brawler-maker",
        description: "Brawler Maker is a python tool that allows even begginers to create their own brawler. To do that, it presents a UI where the user just have to enter information about the brawler, and a playable apk will be automatically generated, with other customisation settings, such as it can be useful for begginers that don't know how to mod, or for more advanced users that just want to make a base brawler.",
        versions: [
            {
                version: "Latest",
                downloadLink: "https://github.com/AngelFireLA/AngelFire-Brawlermaker/releases"
            }
        ]
    },
    {
        name: "BSL",
        shortDescription: "BSDS ported to newer versions. No online battles.",
        tags: ["Selfhost"],
        id: "bsl",
        versions: [
            {
                version: "V53",
                downloadLink: "https://github.com/LkPrtctrd/BSL-V53/archive/refs/heads/master.zip"
            },
            {
                version: "V55",
                downloadLink: "https://github.com/LkPrtctrd/BSL-V55/archive/refs/heads/master.zip"
            }
        ]
    },
    {
        name: "BSDS",
        shortDescription: "Selfhost your own private server with working battles. No online battles.",
        tags: ["Selfhost"],
        id: "bsds",
        versions: [
            {
                version: "V41",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/v41server.zip"
            },
            {
                version: "V42",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/v42server.zip"
            },
            {
                version: "V43",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/v43server.zip"
            },
            {
                version: "V44",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/bsds/v44server.zip"
            }
        ]
    },
    {
        name: "Infinity Reverse Brawl",
        shortDescription: "All characters unlocked and third star powers added for some brawlers and new skins.",
        tags: ["Offline"],
        id: "infinity-reverse",
        versions: [
            {
                version: "V15",
                downloadLink: "https://dl.natesworks.com/brawlmods/infinityreverse/Infinity-Reverse-Brawl-15.167.apk"
            }
        ]
    },
    {
        name: "Buster's Brawl",
        shortDescription: "Recreats brawlers from newer versions of the game.",
        tags: ["Offline"],
        id: "buster",
        versions: [
            {
                version: "V14",
                downloadLink: "https://dl.natesworks.com/brawlmods/bustersbrawl/Buster%5c's+Brawl+v14.apk"
            }
        ]
    },
    {
        name: "Allah Brawl",
        shortDescription: "Dotnet V27 and V29 server.",
        tags: ["Private server"],
        id: "allah",
        versions: [
            {
                version: "V27",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/allahbrawl/allahbrawl-v27.zip"
            },
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/allahbrawl/allahbrawl-v29.zip"
            }
        ]
    },
    {
        name: "Mechaoffline",
        shortDescription: "An offline version of V19.",
        tags: ["Offline"],
        id: "mechaoffline",
        versions: [
            {
                version: "V19",
                downloadLink: "https://dl.natesworks.com/brawlmods/mechaoffline/mechaoffline_v3%20(1).apk"
            }
        ]
    },
    {
        name: "Multi Brawl",
        shortDescription: "A modified version of V29 that replaces ALL the brawlers will new ones.",
        tags: ["Offline"],
        id: "multi",
        versions: [
            {
                version: "V47 (BS V29)",
                downloadLink: "https://multibrawl.com/download"
            }
        ]
    },
    {
        name: "Brawl Mod Beta",
        shortDescription: "Offline version of V11",
        tags: ["Offline"],
        id: "beta-offline",
        versions: [
            {
                version: "V11",
                downloadLink: "https://dl.natesworks.com/brawlmods/brawlmodbeta/base%20(2).apk"
            }
        ]
    },
    {
        name: "GioBrawl",
        shortDescription: "Offline version of V29 with new skins and... interesting brawler names.",
        tags: ["Offline"],
        id: "gio",
        versions: [
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/giobrawl/GioBrawl_V2.5.apk"
            }
        ]
    },
    {
        name: "Bruh Brawl",
        shortDescription: "Adds unique attacks to many brawlers!",
        tags: ["Offline"],
        id: "bruh",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlmods/bruhbrawl/bruhbrawl-v1.apk",
            }
        ]
    },
    {
        name: "Dimensional Brawl",
        shortDescription: "Dimensional Brawl is a small mod made on v29 mainly about custom brawlers",
        tags: ["Offline"],
        id: "dimensional",
        versions: [
            {
                version: "V29",
                downloadLink: "https://drive.google.com/uc?export=download&id=1_90LQFje1W8qDryqBkwxD4GHWuiOBpLC",
                altDownload: "https://www.mediafire.com/file/abe65bxfc6wtcxh/Dimensional_Brawl_V4.apk/file"
            }
        ]
    },
    {
        name: "Mandy's Candy",
        shortDescription: "Ports many brawlers from newer versions of the game.",
        tags: ["Offline"],
        id: "mandy",
        versions: [
            {
                version: "Bizarre circus",
                downloadLink: "https://drive.google.com/uc?export=download&id=1493BbXhEHbgheOb9Ddh0Q3Ybs2Qb8rQR",
            }
        ]
    },
    {
        name: "X-coder",
        shortDescription: "A tool for decoding (sc to png) and encoding (png to sc) sc files used in Supercell games.",
        tags: ["Utilities"],
        id: "x-coder",
        versions: [
            {
                version: "V2.2 for Android",
                downloadLink: "https://github.com/lilmuff2/X-coder/releases/download/v2.2/X-coder.apk",
            },
            {
                version: "V2.2 for Windows",
                downloadLink: "https://github.com/lilmuff2/X-coder/releases/download/v2.2/X-coder_setup.exe",
            }
        ]
    },
    {
        name: "True V53 Offline",
        shortDescription: "Brawl Stars V53 Offline. Doesn't work on Android 14 and Brawl Ball and Showdown don't work.",
        tags: ["Offline"],
        id: "truev53offline",
        versions: [
            {
                version: "V53",
                downloadLink: "https://dl.natesworks.com/brawlmods/truev53offline/truev53offline.apk",
            }
        ]
    },
    {
        name: "Mt Brawl Online",
        shortDescription: "All the cursed brawlers of Mt Brawl, but you can play with friends.",
        tags: ["Private server"],
        id: "mtbrawl-online",
        versions: [
            {
                version: "V2",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/mtbrawl/mtbrawl-online.apk",
            }
        ]
    },
    {
        name: "Heart Brawl",
        shortDescription: "V29 Server with Edgar, Byron, Amber and Collete ported.",
        tags: ["Private server"],
        id: "heart",
        versions: [
            {
                version: "V32",
                downloadLink: "https://dl.natesworks.com/brawlmods/heartbrawl/HeartBrawl_V32.apk",
            }
        ]
    },
    {
        name: "Darryl Stars",
        shortDescription: "Adds 30 new brawlers.",
        tags: ["Offline"],
        id: "darryl",
        versions: [
            {
                version: "V9 (BS V29)",
                downloadLink: "https://www.mediafire.com/file/toku4rrnefxbr8c/Darryl_Stars_V9.apk/file",
            }
        ]
    },
    {
        name: "GTX Brawl",
        shortDescription: "Adds skins from Chinese Brawl Stars, adds new skins, maps and modifiers.",
        tags: ["Offline"],
        id: "gtx",
        versions: [
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/gtxbrawl/GTXBRAWL_Axusterra.apk",
            }
        ]
    },
    {
        name: "Nais Brawl",
        shortDescription: "Replaces all brawlers with new ones!",
        tags: ["Offline"],
        id: "nais",
        versions: [
            {
                version: "V18.2",
                downloadLink: "https://dl.natesworks.com/brawlmods/naisbrawl/Nais+Brawl+v18+Part+2.apk",
            }
        ]
    },
    {
        name: "Boomerang Brawl",
        shortDescription: "All brawlers attacks return like Carls.",
        tags: ["Offline"],
        id: "boomerang",
        versions: [
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlmods/boomerangbrawl/boomerang.apk",
            }
        ]
    },
    {
        name: "Mt Brawl",
        shortDescription: "All brawlers are cursed.",
        tags: ["Offline"],
        id: "mt",
        versions: [
            {
                version: "Finished",
                downloadLink: "https://dl.natesworks.com/brawlmods/mtbrawl/mtbrawl_finished.apk",
            }
        ]
    },
    {
        name: "Classic Brawl",
        shortDescription: "Private server for many versions of the game.",
        tags: ["Private server"],
        id: "cb",
        versions: [
            {
                version: "V19",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v19.zip",
            },
            {
                version: "V20",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v20.zip",
            },
            {
                version: "V21",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v21.zip",
            },
            {
                version: "V22",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v22.zip",
            },
            {
                version: "V23",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v23.zip",
            },
            {
                version: "V24",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v24.zip"
            },
            {
                version: "V25",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v25.zip",
            },
            {
                version: "V26",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v26.zip",
            },
        ]
    },
    {
        name: "Aimbot Brawl",
        shortDescription: "Enables aimbot.",
        tags: ["Offline"],
        id: "aimbot",
        versions: [
            {
                version: "V29",
                downloadLink: "https://www.mediafire.com/file/7gskpz9kijgbpgy/aimbot+brawl.apk/file",
            }
        ]
    },
    {
        name: "TTB Stars",
        shortDescription: "Adds more brawlers.",
        tags: ["Offline"],
        id: "ttb",
        versions: [
            {
                version: "V15",
                downloadLink: "https://www.mediafire.com/file/7gskpz9kijgbpgy/aimbot+brawl.apk/file",
            }
        ]
    },
    {
        name: "GDX Brawl",
        shortDescription: "Offline brawl stars.",
        tags: ["Offline"],
        id: "gdx",
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/uc?export=download&id=1EBlqGH_dnIlA5gZ-VeJIrhlpw5bDTHby",
            }
        ]
    },
    {
        name: "Hamster Brawl",
        shortDescription: "A fully functional private server.",
        tags: ["Private server"],
        id: "hamster",
        description: `
Hamster Brawl is a V28 private server!
What works?

- Road of Glory
- Club
- Shop
- Bot fights
- Ratings
and much more!`,
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=1WNlX6jEjw2oJUjmzfTjVA9oTHsYBV74j",
            }
        ]
    },
    {
        name: "Pirate Offline",
        shortDescription: "A fully functional V24 offline mod.",
        tags: ["Offline"],
        id: "pirate",
        versions: [
            {
                version: "V3.2 (BS V24)",
                downloadLink: "https://drive.google.com/file/d/19JBTXFFhq05QnU7LWSXrH4rN1PjkU-RM/view?usp=drivesdk",
            }
        ]
    },
    {
        name: "Sigma Brawl",
        shortDescription: "Old movement and OG brawlers!",
        tags: ["Private server"],
        id: "brainrot",
        versions: [
            {
                version: "V28",
                downloadLink: "https://drive.google.com/uc?export=download&id=15Dj2Uhaukvd8L_gZ73uP-N3fCTVOjtYM"
            }
        ]
    },
    {
        name: "Hyper Brawl",
        shortDescription: "V19 private server.",
        tags: ["Private server"],
        id: "hyper",
        versions: [
            {
                version: "V19",
                downloadLink: "https://drive.google.com/file/d/1Uv20bSm88jpoMczJUGH4JCpc3ra2Qoqt/view?usp=sharing"
            }
        ]
    },
    {
        name: "RUID",
        shortDescription: "Based on surge offline v28 has half of all bs skins new brawlers some skills changed and new loading, menu and training ground.",
        tags: ["Offline"],
        id: "ruid",
        versions: [
            {
                version: "V3",
                downloadLink: "https://dl.natesworks.com/brawlstars/mods/ruid/Ruidbrawl3.apk"
            }
        ]
    },
    {
        name: "Moni Brawl",
        shortDescription: "V28 private server with new skins, winstreaks and more!",
        tags: ["Private server"],
        id: "moni",
        versions: [
            {
                version: "V3",
                downloadLink: "https://dl.natesworks.com/brawlmods/monibrawl/Moni%20Brawl_3.267.apk"
            }
        ]
    },
    {
        name: "Funneh Brawl",
        shortDescription: "V28 Private server (see full description).",
        description: `Funneh Brawl V28 Release! 😱\
What works?;👍\
-Clubs ✅\
-Battle End ✅\
-Trophy Road ✅\
-Boxes ✅\
-"Daily Deals" ✅\
-Brawl Pass ✅\
And more! 😜\
Check out yourself 🥰\
http://t.me/FunnehBrawl`,
        tags: ["Private server"],
        id: "funneh",
        versions: [
            {
                version: "V5",
                downloadLink: "https://dl.natesworks.com/brawlmods/funneh-brawl/Funneh-Brawl-V5.apk",
                altDownload: "t.me/FunnehBrawl"
            }
        ]
    },
    {
        name: "Minecraft theme",
        shortDescription: "Minecraft Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "minecraft-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/minecraft-locations.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Chinese Skins",
        shortDescription: "Chinese skins Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "chinabrawl-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/skins-bsc-alt.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Maid brawlers",
        shortDescription: "Maid Brawlers Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "maid-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/maid-skins.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Ghoul Stars",
        shortDescription: "Ghoul Stars Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "ghoulstars-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/ghoul-stars.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Gift Shop Theme",
        shortDescription: "Gift shop Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "giftshop-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/theme-giftshop.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "LNY22 Theme",
        shortDescription: "Lunar new year Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "lny22-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/theme-LNY22.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Outline",
        shortDescription: "Outline Nulls Brawl assets.",
        tags: ["Nulls Brawl assets"],
        id: "outline-nbassets",
        versions: [
            {
                version: "V1",
                downloadLink: "https://dl.natesworks.com/brawlstars/assets/nb/outline.NullsBrawlAssets"
            }
        ]
    },
    {
        name: "Allah Brawl",
        tags: ["Selfhost"],
        id: "allah",
        versions: [
            {
                version: "V27",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/allahbrawl/allahbrawl-v27.zip"
            },
            {
                version: "V29",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/allahbrawl/allahbrawl-v27.zip"
            },
        ]
    },
    {
        name: "Classic Brawl",
        shortDescription: "A private server made in Python for older versions of the game.",
        tags: ["Selfhost"],
        id: "cb",
        versions: [
            {
                version: "V19",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v19.zip"
            },
            {
                version: "V20",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v20.zip"
            },
            {
                version: "V21",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v21.zip"
            },
            {
                version: "V22",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v22.zip"
            },
            {
                version: "V23",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v23.zip"
            },
            {
                version: "V24",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v24.zip"
            },
            {
                version: "V25",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v25.zip"
            },
            {
                version: "V26",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/classicbrawl/Classic-Brawl-v26.zip"
            }
        ]
    },
    {
        name: "Dudka Brawl",
        tags: ["Selfhost"],
        id: "dudka",
        versions: [
            {
                version: "V12",
                downloadLink: "https://dl.natesworks.com/brawlstars/servers/dudka/dudka-v12.zip"
            }
        ]
    },
    {
        name: "Obiad Brawl",
        tags: ["Selfhost"],
        id: "obiad",
        shortDescription: "Server for portrait versions of the game.",
        versions: [
            {
                version: "V1",
                downloadLink: "https://github.com/Super-brawl-team/Obiad-Brawl/archive/refs/heads/main.zip"
            },
            {
                version: "V2", // same as V1 lmao
                downloadLink: "https://github.com/Super-brawl-team/Obiad-Brawl/archive/refs/heads/main.zip"
            },
            {
                version: "V4", 
                downloadLink: "https://github.com/Super-brawl-team/Obiad-brawl-v4/archive/refs/heads/main.zip"
            },
        ]
    }
];
