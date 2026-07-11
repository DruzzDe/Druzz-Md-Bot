const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/DruzzDe",
REPO_NAME: process.env.REPO_NAME || "DRUZZ-MD",
BOT_NAME: process.env.BOT_NAME || "DRUZZ-MD",
DESCRIPTION: process.env.DESCRIPTION || "DRUZZ-MD HAÏTIAN POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "18095120668",
OWNER_NAME: process.env.OWNER_NAME || "Developer Druzz",
ST_SAVE: process.env.ST_SAVE || "DRUZZ-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "DRUZZ-MD-BY POWERED BY DRUZZ",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY DRUZZ-MD`* _*POWERD BY*_ *DRUZZ_DEV*",
FOOTER: process.env.FOOTER || " DRUZZ-MD",
COPYRIGHT: process.env.COPYRIGHT || "*𖢰 DRUZZ-MD BY DRUZZ_DEV*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363406273402002@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbCMDOSFnSzHxgIjpw06",
INSTA: process.env.INSTA || "https://Instagram.com/tazann7",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/cdyd0s.png",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/cdyd0s.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://files.catbox.moe/cdyd0s.png",
AI_IMG: process.env.AI_IMG || "https://files.catbox.moe/cdyd0s.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/cdyd0s.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/cdyd0s.png",
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/cdyd0s.png",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/cdyd0s.png",
FUN_IMG: process.env.FUN_IMG || "https://files.catbox.moe/cdyd0s.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/cdyd0s.png",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/cdyd0s.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/cdyd0s.png",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/cdyd0s.png",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/cdyd0s.png"
};
