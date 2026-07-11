const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "DRUZZ-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFzK09pNWNqa0E0eWdmRDNYSDFNdmpETmFBVUZqVUlORmZPSWR2RDNuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzVBUEJ1MFVLb2plbk1HT3hIVWZMMEkwUkhYZGI3RGxDbFBGV2ZHQjRUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ3c1TnA1VDFzTjNlekxNbjNzSjVIT2hwaU5ldmtCV1VuMHYvU1BuVFdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTEMybStPWDFjWGg2dVZsb1dyVmdMbzVWbDZzK2YzVzkyTXlOcjRtdGlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9EbFIzZ1pUNVRtWHUvek5KWXlDQXNDbTdDdmNJaW5EZExXVzNTSU9ZV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxiWXBpNHIzQ2lXSUp3V0RUNy9SVFdtMXlseDFZNjZiVE42T0xCUUZwUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZNNjlpNk1teTZVenNkY0lBMUtibEp1Y0tnZ1lnT1oyVkM0QlZ4WURFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGVxM1ZVcDVXSFVjdUdRTUx3RjRQeFhSa3o4em1KdFd1SzBhZ1IrRmFUVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVUQXJ6bnpyU2hOY1RkZXlmMG10b3JWUFF2THRaZEtEbktQL1ZneDdSZHd3cGpPM2FjYS9qS2dqTVBkK1g4R0diOEJ4NTYza0UyOGJBaFBXa0ZJdUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJLMXJUZlFSL1kzbU9PK2t6cUEvZVlRazg0d2Y0bmh4R3Z4VG9LU0hHNEtzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4Mjk0MzgzODg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0E4MjQyQkRBOTQwN0REQjcwQzY3QTM1N0E4RkNBQiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgzNzk4MjI1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIxODI5NDM4Mzg4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNDNkRGNjM1OTYwNkREMDM1QkJDNzVDQUU4NzFDREMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4Mzc5ODIyNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTgyOTQzODM4ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMEZCNzgwQUREMjdEN0Q5NTM2MTNBMDE5OUVEOUM4IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODM3OTgyMjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE4Mjk0MzgzODg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0NGRTU0MDI3QjBFNjdGODUzQ0E5RUIxRDlDNEJBQyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgzNzk4MjI2fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlNGTEE0UjFZIiwibWUiOnsiaWQiOiIxODI5NDM4Mzg4NToyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTIxNTM1NDQ0NTU4MDA5OjJAbGlkIiwibmFtZSI6IjQgU3VwIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNmhwWUlIRU1penl0SUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrZkw2QkxhSFl3TEZjdTZyT3MyaUNYUUZTQk8wVWVseDZ5bmhEblVjT0NnPSIsImFjY291bnRTaWduYXR1cmUiOiJtTUZGZUN0WDdlVnQ4bDc3NzhacGlSSU14TFNvZkdPaGl4anZvbzFXNHM0eFBLZWNSOUt1VFhzeUc4emhuSmwyZHk1alhuNTFIeFd0SzRMVGJ3SDJBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZlZlczJVem1HWHFad3M3SDExYzk2ZlpuOVJORFk0YmlXbTRJZW52a1dYMlpPYVY5RU91VFlHVEZSUEUrQkZ3dHVSUWxmRnhZSllyZHVUUHhHUE9IREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMjE1MzU0NDQ1NTgwMDk6MkBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZm55K2dTMmgyTUN4WEx1cXpyTm9nbDBCVWdUdEZIcGNlc3A0UTUxSERnbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzgzNzk4MjIzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5wQyJ9",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DRUZZ-MD 🎱*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DRUZZ-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DRUZZ-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "18294383885",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Druzz_Dev",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "18095120668",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







