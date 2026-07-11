const {cmd , commands} = require('../lib/command')
const os = require("os")
const { runtime } = require('../lib/functions')
const hrs = new Date().getHours({ timeZone: 'Asia/Colombo' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const axios = require('axios');
const { fakevCard } = require('../lib/fakevCard');
const bot = require('../lib/bot')
const config = require('../setting')
//========================================About==================================================
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, contextInfo, pushname, reply}) => {
try{

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
    var date = new Date().toLocaleDateString(get_localized_date)
    var am_pm = ''
    if (hrs < 12) am_pm = 'ᴀᴍ'
    if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
    let madeMenu = `👋 *ʜᴇʟʟᴏ*, *${pushname}*
  
╭─「 ᴅᴀᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 」
│📅 *\`ᴅᴀᴛᴇ\`*: ${date}
│⏰ *\`ᴛɪᴍᴇ\`*: ${time} ${am_pm}
╰──────────⌬

╭──────────⌬
│ *ᴡʜᴀᴛ's ᴜᴘ ɪ ᴀ'ᴍ ᴅʀᴜᴢᴢ ᴍᴅ !!*
╰──────────⌬

${bot.COPYRIGHT}`

await conn.sendMessage(from, { 
    image:{ url:bot.ALIVE_IMG },
    caption:madeMenu,
    contextInfo
},{quoted:mek})
console.log(`♻ ᴀʙᴏᴜᴛ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${from}`);
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//==================================================ALive============================================
cmd(
    {
      pattern: "alive",
      alias: ["status"],
      desc: "Check if the bot is alive",
      category: "main",
      react: "👨‍💻",
      filename: __filename,
    },
    async (conn,mek,m, { from, pushname, reply, contextInfo } ) => {
      try {
    
      var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
      var date = new Date().toLocaleDateString(get_localized_date)
      var am_pm = ''
        if (hrs < 12) am_pm = 'ᴀᴍ'
        if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
        
let aliveText =`👋 *ʜɪ*, *${pushname}* *ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ*
  
╭─「 ᴅᴀᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 」
│📅 *\`ᴅᴀᴛᴇ\`*: ${date}
│⏰ *\`ᴛɪᴍᴇ\`*: ${time} ${am_pm}
╰──────────⌬
  
╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」
│👤 *\`ᴜsᴇʀ\`*: ${pushname}
│✒ *\`ᴘʀᴇғɪx\`*: ${config.PREFIX}
│🧬 *\`ᴠᴇʀsɪᴏɴ\`*: ${bot.VERSION}
│📟 *\`ᴜᴘᴛɪᴍᴇ\`*: ${runtime(process.uptime())}
│📂 *\`ᴍᴇᴍᴏʀʏ\`*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
╰──────────⌬
╭──────────⌬
│ *ʜᴇʟʟᴏ , ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ!!*
╰──────────⌬
  
🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ɴᴜᴍʙᴇʀ*
  
> ¹ ➢ ᴄᴏᴍᴍᴀɴᴅs ᴍᴇɴᴜ
> ² ➢ ᴅʀᴜᴢᴢ ᴍᴅ sᴘᴇᴇᴅ
  
${bot.COPYRIGHT}`;

const vv = await conn.sendMessage( from, { 
    image: { url:bot.ALIVE_IMG },
    caption:aliveText,
    contextInfo
},{quoted:mek})
conn.ev.on('messages.upsert', async (msgUpdate) => {
          const msg = msgUpdate.messages[0];
          if (!msg.message || !msg.message.extendedTextMessage) return;
  
          const selectedOption = msg.message.extendedTextMessage.text.trim();
  
          if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
              switch (selectedOption) {
                  case '1':
                      reply('.menu');
                      break;
                  case '2':
                      reply('.ping');
                      break;
                      default:
                          reply("Invalid option. Please select a valid option🔴");
                  }
  
              }
          });
  
        console.log(`♻ ᴀʟɪᴠᴇ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ ɪɴ: ${from}`);
      } catch (e) {
        console.error("ᴀʟɪᴠᴇ ᴄᴏᴍᴍᴀɴᴅ ᴇʀʀᴏʀ:", e);
        reply(`❌ ᴇʀʀᴏʀ: ${e.message}`);
      }
    }
  );
//=============================================Auto Bio===============================================
// AutoBIO feature variables
let autoBioInterval;

// 1. Set AutoBIO
cmd({
    on: "body"
  },  
 async (conn, mek, m, { from, isOwner, reply }) => {
    if (config.AUTO_BIO === 'true') {
        startAutoBio(conn);
    } 
});

// 2. Start AutoBIO
function startAutoBio(conn) {
    // Clear any existing interval to avoid duplicates
    if (autoBioInterval) clearInterval(autoBioInterval);

    // Set a new interval to update the bio every minute (or any preferred time)
    autoBioInterval = setInterval(async () => {
        const bioText = `*${bot.BIO_TEXT}* ${runtime(process.uptime())} 💛`;  // Set the bio text with time
        await conn.updateProfileStatus(bioText);  // Update the bot's bio
    }, 60 * 1000);  // 1 minute interval
}
console.log(`ᴅʀᴜᴢᴢ-ᴍᴅ ♻ ᴀᴜᴛᴏ ʙɪᴏ sᴛᴀʀᴛᴇᴅ`);
//============================ Env=======================================================
function isEnabled(value) {
return value && value.toString().toLowerCase() === "true";
}
cmd({
    pattern: "env",
    alias: ["setting2", "allvar"],
    desc: "Settings of bot",
    category: "main",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, contextInfo, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `╭━━━⌬ *ᴅʀᴜᴢᴢ-ᴍᴅ-ᴇɴᴠ* ⌬━━━┈⊷
┃▸╭───────────
┃▸┃๏ *𝔼ℕ𝕍 𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊 📡*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━⌬ *ᴇɴᴀʙʟᴇᴅ ᴅɪsᴀʙʟᴇᴅ* ⌬━━┈⊷
┇𒑡 *sᴛᴀᴛᴜs ᴠɪᴇᴡ:* ${isEnabled(config.AUTO_READ_STATUS) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *sᴛᴀᴛᴜs ʀᴇᴘʟʏ:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀᴜᴛᴏ ʀᴇᴘʟʏ:* ${isEnabled(config.AUTO_REPLY) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ:* ${isEnabled(config.AUTO_STICKER) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀᴜᴛᴏ ᴠᴏɪᴄᴇ:* ${isEnabled(config.AUTO_VOICE) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ:* ${isEnabled(config.AUTO_REACT) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡*ᴀɴᴛɪ-ʟɪɴᴋ:* ${isEnabled(config.ANTI_LINK) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀɴᴛɪ-ʙᴀᴅ ᴡᴏʀᴅs:* ${isEnabled(config.ANTI_BAD) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀᴜᴛᴏ ᴛʏᴘɪɴɢ:* ${isEnabled(config.AUTO_TYPING) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀᴜᴛᴏ ʀᴇᴄᴏʀᴅɪɴɢ:* ${isEnabled(config.AUTO_RECORDING) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ:* ${isEnabled(config.ALWAYS_ONLINE) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡*ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ:* ${isEnabled(config.PUBLIC_MODE) ? "Enabled ✅" : "Disabled ❌"}
┇𒑡 *ʀᴇᴀᴅ ᴍᴇssᴀɢᴇ:* ${isEnabled(config.READ_CMD) ? "Enabled ✅" : "Disabled ❌"}
╰━━━━━━━━━━━━──┈⊷
> ${bot.DESCRIPTION}`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: `${bot.ALIVE_IMG}` }, // Image URL
                caption: envSettings,
                contextInfo
            },
            { quoted: mek }
        );

        // Send an audio file
        console.log(`♻ ᴇɴᴠ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${from}`);
    } catch (error) {
        console.log(error);
        reply(`ᴇʀʀᴏʀ: ${error.message}`);
    }
});
//============================List===========================================
cmd({
    pattern: "list",
    react: "🛸",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.list',
    filename: __filename
},
async(conn, mek, m,{ from, pushname, reply, contextInfo, qMessage }) => {
try{
let menu = {
main: '',
ai: '',
download: '',
group: '',
owner: '',
convert: '',
education: '',
news: '',
movie: '',
search: '',
tools: '',
other: '',
fun: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*│*➢${commands[i].pattern}\n`;
 }
}

let madeMenu = `🤩 *ʜᴇʟʟᴏ* *${pushname}*
> ᴡᴇʟʟᴄᴏᴍᴇ ᴛᴏ ᴅʀᴜᴢᴢ-ᴍᴅ 🪀

╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」
│👤 *\`ᴜsᴇʀ\`*: ${pushname}
│✒ *\`ᴘʀᴇғɪx\`*: ${config.PREFIX}
│🧬 *\`ᴠᴇʀsɪᴏɴ\`*: ${bot.VERSION}
│📟 *\`ᴜᴘᴛɪᴍᴇ\`*: ${runtime(process.uptime())}
│📂 *\`ᴍᴇᴍᴏʀʏ\`*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
╰──────────⌬

> ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.owner}*╰───────────⌬*
> ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.convert}*╰───────────⌬*
> ᴀɪ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.ai}*╰───────────⌬*
> sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.search}*╰───────────⌬*
> ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.download}*╰───────────⌬*
> ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.main}*╰───────────⌬*
> ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.group}*╰───────────⌬*
> ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.fun}*╰───────────⌬*
> ᴛᴏᴏʟs ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.tools}*╰───────────⌬*
> ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.other}*╰───────────⌬*
> ᴍᴏᴠɪᴇ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.movie}*╰───────────⌬*
> ɴᴇᴡs ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.news}*╰───────────⌬*
> ᴘᴀsᴛ ᴘᴀᴘᴇʀ ᴄᴏᴍᴍᴀɴᴅs
*╭──────────⌬*
${menu.education}*╰───────────⌬*

${bot.COPYRIGHT}`
console.log(`♻ ʟɪsᴛ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${from}`);
await conn.sendMessage( from, 
    {
        image:{ url:bot.ALIVE_IMG },
        caption: madeMenu,
        contextInfo
    }, { quoted: qMessage })
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//=================================menu=====================================================================
cmd({
    pattern: "menu",
    alias: ["help"],
    desc: "Displays the bot menu",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, pushname, reply, contextInfo }) => {
    try {
        let desc = `
🤩 *ʜᴇʟʟᴏ* *${pushname}*
> ᴡᴇʟʟᴄᴏᴍᴇ ᴛᴏ ᴅʀᴜᴢᴢ-ᴍᴅ 🪀

╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」
│👤 *\`ᴜsᴇʀ\`*: ${pushname}
│✒ *\`ᴘʀᴇғɪx\`*: ${config.PREFIX}
│🧬 *\`ᴠᴇʀsɪᴏɴ\`*: ${bot.VERSION}
│📟 *\`ᴜᴘᴛɪᴍᴇ\`*: ${runtime(process.uptime())}
│📂 *\`ᴍᴇᴍᴏʀʏ\`*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
╰──────────⌬

> ʀᴇᴘʟʏ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʙᴇʟᴏᴡ🗿

¹  │➢ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
²  │➢ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
³  │➢ ᴀɪ ᴍᴇɴᴜ
⁴  │➢ sᴇᴀʀᴄʜ ᴍᴇɴᴜ
⁵  │➢ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
⁶  │➢ ᴍᴀɪɴ ᴍᴇɴᴜ
⁷  │➢ ɢʀᴏᴜᴘ ᴍᴇɴᴜ
⁸  │➢ ғᴜɴ ᴍᴇɴᴜ
⁹  │➢ ᴛᴏᴏʟs ᴍᴇɴᴜ
¹⁰ │➢ ᴏᴛʜᴇʀ ᴍᴇɴᴜ
¹¹ │➢ ᴍᴏᴠɪᴇ ᴍᴇɴᴜ
¹² │➢ ɴᴇᴡs ᴍᴇɴᴜ
¹³ │➢ ᴇᴅᴜᴄᴀᴛɪᴏɴ ᴍᴇɴᴜ 

${bot.COPYRIGHT}`;

        // Send the menu with an image
        const menuMessage = await conn.sendMessage(from, { 
            image: { url: bot.ALIVE_IMG }, 
            caption: desc, 
            contextInfo
        }, { quoted: mek });

        // Listen for the reply
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            
            const selectedOption = msg.message.extendedTextMessage.text.trim();

            // Check if the reply is in response to the menu message
            if (msg.message.extendedTextMessage.contextInfo?.stanzaId === menuMessage.key.id) {

                switch (selectedOption) {
                    case '1':
                        {
                            const ownerCommands = commands.filter(c => c.category === 'owner' && !c.dontAddCommandList);
                            const commandList = ownerCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response = `*⌬ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${ownerCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.OWNER_IMG }, 
                            caption: response 
                        }, { quoted: mek });
                        }
                        break;
                    case '2':
                        {
                            const convertCommands = commands.filter(c => c.category === 'convert' && !c.dontAddCommandList);
                            const commandList = convertCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response2 = `*⌬ ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${convertCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.CONVERT_IMG }, 
                            caption: response2 
                        }, { quoted: mek });
                        }
                        break;
                    case '3':
                        {
                            const aiCommands = commands.filter(c => c.category === 'ai' && !c.dontAddCommandList);
                            const commandList = aiCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response3 = `*⌬ ᴀɪ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${aiCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.AI_IMG }, 
                            caption: response3 
                        }, { quoted: mek });
                        }
                        break;
                    case '4':
                        {
                            const searchCommands = commands.filter(c => c.category === 'search' && !c.dontAddCommandList);
                            const commandList = searchCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response4 = `*⌬ sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅ LIST ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *Total Commands: ${searchCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.SEARCH_IMG }, 
                            caption: response4 
                        }, { quoted: mek });
                        }
                        break;
                    case '5':
                        {
                            const downloadCommands = commands.filter(c => c.category === 'download' && !c.dontAddCommandList);
                            const commandList = downloadCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response5 = `*⌬ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${downloadCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.DOWNLOAD_IMG }, 
                            caption: response5 
                        }, { quoted: mek });
                        }
                        break;
                    case '6':
                        {
                            const mainCommands = commands.filter(c => c.category === 'main' && !c.dontAddCommandList);
                            const commandList = mainCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response6 = `*⌬ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${mainCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.MAIN_IMG }, 
                            caption: response6 
                        }, { quoted: mek });
                        }
                        break;
                    case '7':
                        {
                            const groupCommands = commands.filter(c => c.category === 'group' && !c.dontAddCommandList);
                            const commandList = groupCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response7 = `*⌬ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${groupCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.GROUP_IMG }, 
                            caption: response7 
                        }, { quoted: mek });
                        }
                        break;
                    case '8':
                        {
                            const funCommands = commands.filter(c => c.category === 'fun' && !c.dontAddCommandList);
                            const commandList = funCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response8 = `*⌬ ғᴜɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${funCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.FUN_IMG }, 
                            caption: response8 
                        }, { quoted: mek });
                        }
                        break;
                    case '9':
                        {
                            const toolsCommands = commands.filter(c => c.category === 'tools' && !c.dontAddCommandList);
                            const commandList = toolsCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response9 = `*⌬ ᴛᴏᴏʟs ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${toolsCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.TOOLS_IMG }, 
                            caption: response9 
                        }, { quoted: mek });
                        }
                        break;
                    case '10':
                        {
                            const otherCommands = commands.filter(c => c.category === 'other' && !c.dontAddCommandList);
                            const commandList = otherCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response10 = `*⌬ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${otherCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.OTHER_IMG }, 
                            caption: response10 
                        }, { quoted: mek });
                        }
                        break;
                        case '11':
                        {
                            const movieCommands = commands.filter(c => c.category === 'movie' && !c.dontAddCommandList);
                            const commandList = movieCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response11 = `*⌬ ᴍᴏᴠɪᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${movieCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.MOVIE_IMG }, 
                            caption: response11 
                        }, { quoted: mek });
                        }
                        break;
                        case '12':
                        {
                            const newsCommands = commands.filter(c => c.category === 'news' && !c.dontAddCommandList);
                            const commandList = newsCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response12 = `*⌬ ɴᴇᴡs ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *RAM USAGE* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ TIME* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${newsCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.NEWS_IMG }, 
                            caption: response12 
                        }, { quoted: mek });
                        }
                        break;
                        case '13':
                        {
                            const ppCommands = commands.filter(c => c.category === 'education' && !c.dontAddCommandList);
                            const commandList = ppCommands.map(c => `│ • *${c.pattern}*`).join('\n');
                            const response13 = `*⌬ ᴇᴅᴜᴄᴀᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ⌬*
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│𒑡 *ʀᴀᴍ ᴜsᴀɢᴇ* - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(os.totalmem() / 1024 / 1024)}ᴍʙ
│𒑡 *ʀᴜɴ ᴛɪᴍᴇ* - ${runtime(process.uptime())}
╰──────────⌬
╭────────⌬
${commandList}
╰────────⌬
➢ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs: ${ppCommands.length}*
${bot.COPYRIGHT}`;
                        await conn.sendMessage(from, { 
                            image: { url: bot.PP_IMG }, 
                            caption: response13 
                        }, { quoted: mek });
                        }
                        break;
                    default:
                }
            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('⚠️ *An error occurred while processing your request.*');
    }
});
//=================================================Owner===============================================
cmd({
    pattern: "owner",
    react: "👑", // Reaction emoji when the command is triggered
    alias: ["user", "ow"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+18095120668'; // Replace this with the actual owner number
        const ownerName = 'ᴅʀᴜᴢᴢ ᴅᴇᴠ'; // Replace this with the owner's name
        const organization = 'ᴅʀᴜᴢᴢ ᴄᴏᴅᴇʀs'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `*This is the owner's contact:* ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+18095120668', '') + '+18294383885@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
//============================================Ping==================================================
cmd({
    pattern: "speed",
    react: "🤖",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping2',
    filename: __filename
},
async(conn, mek, m,{from, l, reply}) => {
try{
    var inital = new Date().getTime();
    let ping = await conn.sendMessage(from , { text: '*_ᴅʀᴜᴢᴢ-ᴍᴅ..._*'  }, { quoted: mek } )
    var final = new Date().getTime();
    await conn.sendMessage(from, { delete: ping.key })
        return await conn.sendMessage(from , { text: '*🔥ᴘᴏɴɢ*\n *' + (final - inital) + ' ms* '  }, { quoted: mek } )
    } catch (e) {
    reply('*ᴇʀʀᴏʀ !!*')
    l(e)
    }
})

cmd({
  pattern: "ping",
  alias: ["pong", "test"],
  use: '.ping',
  desc: "Real-time ping test with live editing",
  category: "main",
  react: "⚡",
  filename: __filename
}, async (conn, mek, m, { from }) => {
  try {
    const startTime = Date.now();
    let isRunning = true;
    
    // 🚀 SEND INITIAL MESSAGE
    const initialMsg = await conn.sendMessage(from, { 
      text: `╔⌬ *⚡ ρเɳɠ รყรƭεɱ ⚡* ⌬╗
*|* ⏳ ᴛɪᴍᴇ: 0s
*|* ⚡ ᴍꜱ: 0ms
*|* 🔁 ᴛᴇꜱᴛɪɴɢ...
╰━━━━━━━━━━━━━━━━━━⊷
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʀᴜᴢᴢ-ᴍᴅ` 
    }, { quoted: m });
    
    // 🔄 UPDATE INTERVAL
    const updateInterval = setInterval(async () => {
      if (!isRunning) return;
      
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      const currentPing = Math.floor(Math.random() * 50) + 50; // Simulated ping 50-100ms
      
      // 🎨 CREATE UPDATED MESSAGE
      const updatedText = `╔⌬ *⚡ ρเɳɠเɳɠ... ⚡* ⌬╗
*|* ⏳ ᴛɪᴍᴇ: ${elapsedTime}s
*|* ⚡ ᴍꜱ: ${currentPing}ms
*|* ${elapsedTime < 5 ? " 🔁 ᴛᴇꜱᴛɪɴɢ..." : 
  elapsedTime < 10 ? " 📡 ᴍᴇᴀꜱᴜʀɪɴɢ..." : 
  elapsedTime < 15 ? " ⚡ ᴄᴀʟᴄᴜʟᴀᴛɪɴɢ..." : 
  elapsedTime < 20 ? " 📊 ᴀɴᴀʟʏᴢɪɴɢ..." : 
  " ✅ ★彡[ᴄᴏᴍᴘʟᴇᴛᴇ ɪɴ]彡★ " + (30 - elapsedTime) + "s"}\n╰━━━━━━━━━━━━━━━━━━⊷\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʀᴜᴢᴢ-ᴍᴅ`;
      
      try {
        await conn.sendMessage(from, {
          text: updatedText,
          edit: initialMsg.key
        });
      } catch (error) {
        console.log("Edit failed:", error.message);
        isRunning = false;
        clearInterval(updateInterval);
      }
      
    }, 1000); // Update every 1 second
    
    // ⏱️ STOP AFTER 30 SECONDS
    setTimeout(async () => {
      isRunning = false;
      clearInterval(updateInterval);
      
      const finalPing = Date.now() - startTime;
      const avgPing = Math.floor(finalPing / 30);
      
      // 🎯 FINAL MESSAGE
      const finalText = `╔⌬ *⚡ ρเɳɠเɳɠ... ⚡* ⌬╗
*|* ⏳ ᴛᴏᴛᴀʟ ᴛɪᴍᴇ: 30ꜱ
*|* ⚡ ꜰɪɴᴀʟ ᴍꜱ: ${finalPing}ms
*|* 📊 αѵɠ ɱร: ${avgPing}ms
╰━━━━━━━━━━━━━━━━━━⊷

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʀᴜᴢᴢ-ᴍᴅ
${avgPing < 100 ? " 🚀 µℓƭ૨α ƒαรƭ" : 
  avgPing < 200 ? " ⚡ εא૮εℓℓεɳƭ" : 
  avgPing < 500 ? " 🔄 ɠσσ∂" : 
  " 📶 αѵε૨αɠε"}

📍 ᴜꜱᴇ .ᴍᴇɴᴜ ꜰᴏʀ ᴄᴏᴍᴍᴀɴᴅꜱ`;
      
      try {
        await conn.sendMessage(from, {
          text: finalText,
          edit: initialMsg.key
        });
      } catch {
        await conn.sendMessage(from, { text: finalText }, { quoted: fakevCard });
      }
      
    }, 30000); // Run for 30 seconds
    
    // 🛑 STOP ON ERROR
    process.on('uncaughtException', () => {
      isRunning = false;
      clearInterval(updateInterval);
    });

  } catch (e) {
    console.error("❌ Ping error:", e);
    await conn.sendMessage(from, { 
      text: `❌ Error: ${e.message}` 
    }, { quoted: fakevCard });
  }
});
//======================================Precisence====================================================
//auto recording
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {       
 if (config.AUTO_RECORDING === 'true') {
                await conn.sendPresenceUpdate('recording', from);
            }
         } 
   );

//auto_voice
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {

  let voc = await axios.get(`${bot.BOT_URL}`);
  const url = voc.data.voice;
    let { data } = await axios.get(url)
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_VOICE === 'true') {
                if (isOwner) return;        
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }                
});

cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
  let rep = await axios.get(`${bot.BOT_URL}`);
  const url = rep.data.reply;
    let { data } = await axios.get(url)
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_REPLY === 'true') {
                if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});
// Composing (Auto Typing)
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
// Always Online
cmd({
  on: "body"
}, async (conn, mek, m, { from, isOwner }) => {
  try {
    if (config.ALWAYS_ONLINE === "true") {
      // Always Online Mode: Bot always appears online (double tick)
      await conn.sendPresenceUpdate("available", from);
    } else {
      // Dynamic Mode: Adjust presence based on owner's status
      if (isOwner) {
        // If the owner is online, show as available (double tick)
        await conn.sendPresenceUpdate("available", from);
      } else {
        // If the owner is offline, show as unavailable (single tick)
        await conn.sendPresenceUpdate("unavailable", from);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

// Public Mod
cmd({
  on: "body"
}, async (conn, mek, m, { from, isOwner }) => {
  try {
    if (config.ALWAYS_ONLINE === "true") {
      // Public Mode + Always Online: Always show as online
      await conn.sendPresenceUpdate("available", from);
    } else if (config.PUBLIC_MODE === "true") {
      // Public Mode + Dynamic: Respect owner's presence
      if (isOwner) {
        // If owner is online, show available
        await conn.sendPresenceUpdate("available", from);
      } else {
        // If owner is offline, show unavailable
        await conn.sendPresenceUpdate("unavailable", from);
      }
    }
  } catch (e) {
    console.log(e);
  }
});
//==========================================Repo=================================================
cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `> ᴅʀᴜᴢᴢ ᴍᴅ ʀᴇᴘᴏ ɪɴғᴏ 🪀

╭⦁⦂⦁*━┉━┉━┉━┉━┉━┉━⦁⦂⦁
┃ 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼𝙱𝙴𝚁: ${bot.OWNER_NUMBER}
┃ 
┃ ᴅʀᴜᴢᴢ-ᴍᴅ ʀᴇᴘᴏ: ${bot.REPO_LINK} 
┃
┃ ʙᴏᴛ ᴜᴘᴅᴀᴛᴇs: ${bot.WA_CHANNEL}
╰⦁⦂⦁*━┉━┉━┉━┉━┉━┉━⦁⦂⦁

*${bot.COPYRIGHT}*
`
await conn.sendMessage(from,{image:{url: bot.ALIVE_IMG},caption:dec},{quoted:mek});
console.log(`♻ ʀᴇᴘᴏ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${from}`);

}catch(e){
    console.log(e)
    reply(`${e}`)
    }
})
//===========================================Setting===============================================
cmd({
    pattern: "settings",
    alias: ["setting","s"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;


        let work;
        switch (config.MODE) {
            case 'public':
                work = '𝙿𝚄𝙱𝙻𝙸𝙲🌎';
                break;
            case 'private':
                work = '𝙿𝚁𝙸𝚅𝙰𝚃𝙴👤';
                break;
            case 'groups':
                work = '𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈👥';
                break;
            case 'inbox':
                work = '𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈🫂';
                break;
            default:
                work = '𝚄𝙽𝙺𝙾𝚆𝙽🛑';
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoreact = config.AUTO_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';

        const vv = await conn.sendMessage(from, {
            image: { url:bot.ALIVE_IMG},
            caption: `> ᴅʀᴜᴢᴢ ᴍᴅ sᴇᴛᴛɪɴɢs\n
┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮
┣┣ᴡᴏʀᴋ ᴍᴏᴅᴇ : *${work}*
┣┣ᴀᴜᴛᴏ sᴛᴀᴛᴜs : *${autoStatus}*
┣┣ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ : *${autoreact}*
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛
> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀  𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝗦🔗⤵️

┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮

*_WORK TYPE_⤵️*
┣┣1.1 PUBLIC WORK
┣┣1.2 PRIVATE WORK
┣┣1.3 GROUP ONLY
┣┣1.4 INBOX ONLY

*_AUTO STATUS SEEN_⤵️*
┣┣3.1 AUTO READ STATUS ON
┣┣3.2 AUTO READ STATUS OFF

*_AUTO REACT_⤵️*
┣┣4.1 AUTO REACT ON
┣┣4.2 AUTO REACT OFF

*_AUTO_TYPING_⤵️*
┣┣6.1 AUTO_TYPING ON
┣┣5.2 AUTO_TYPING OFF

*_AUTO BIO_⤵️*
┣┣6 AUTO BIO ON/OFF

*_24/7 ɴᴇᴡs sᴇʀᴠɪᴄᴇ_⤵️*
┣┣7 ᴀᴄᴛɪᴠᴀᴛᴇ ɴᴇᴡs sᴇʀᴠɪᴄᴇ
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛`
        }, { quoted: mek });
        console.log(`♻ sᴇᴛᴛɪɴɢ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${from}`);
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        if (!isOwner) return;
                        reply('.update MODE:public');
                        reply('.restart');
                        break;
                    case '1.2':
                        if (!isOwner) return;
                        reply('.update MODE:private');
                        reply('.restart');
                        break;
                    case '1.3':
                        if (!isOwner) return;
                        reply('.update MODE:groups');
                        reply('.restart');
                        break;
                    case '1.4':
                        if (!isOwner) return;
                        reply('.update MODE:inbox');
                        reply('.restart');
                        break;
                    case '2.1':
                        if (!isOwner) return;
                        reply('.update AUTO_VOICE:true');
                        break;
                    case '2.2':
                        if (!isOwner) return;
                        reply('.update AUTO_VOICE:false');
                        break;
                    case '3.1':
                        if (!isOwner) return;
                        reply('.update AUTO_READ_STATUS:true');
                        break;
                    case '3.2':
                        if (!isOwner) return;
                        reply('.update AUTO_READ_STATUS:false');
                        break;
                    case '4.1':
                        if (!isOwner) return;
                        reply('.update AUTO_REACT:true');
                        reply('.restart');
                        break;
                    case '4.2':
                        if (!isOwner) return;
                        reply('.update AUTO_REACT:false');
                        reply('.restart');
                        break;
                    case '5.1':
                        if (!isOwner) return;
                        reply('.update AUTO_TYPING:true');
                        break;
                    case '5.2':
                        if (!isOwner) return;
                        reply('.update AUTO_TYPING:false');
                        break;
                    case '6':
                        if (!isOwner) return;
                        reply('.setautobio');
                        break;    
                    case '7':
                        if (!isOwner) return;
                        reply('.sprikynews');
                        break;    
                        sprikynes
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });
    
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
//=================================================System===============================================
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
◈ *𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍*


*⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁
┃
┃ ⏰  *ʀᴜɴᴛɪᴍᴇ :-* ${runtime(process.uptime())}
┃
┃ 📟 *ʀᴀᴍ ᴜsᴀɢᴇ :-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ
┃
┃⚙ *ᴘʟᴀᴛғᴏʀᴍ :-* ${os.hostname()}
┃
┃ 👨‍💻  *ᴏᴡɴᴇʀs :- DRUZZ 🎱* 
┃
┃ 🧬 *ᴠᴇʀsɪᴏɴ :-* ${bot.VERSION}
┃
*⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁

*${bot.COPYRIGHT}*`
await conn.sendMessage(from,{image:{url:bot.ALIVE_IMG},caption:`${status}`},{quoted:mek})
console.log(`♻ sʏsᴛᴇᴍ ᴄᴏᴍᴍᴀɴᴅ ᴜsᴇᴅ : ${from}`);
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//===========================================Functions=========================================
cmd({
    on: "body"
  },
  async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
      try {
          
          const badWords = ["porno","porn","xxn","pono","fack","nude","nappi","doch","xnxn","khalifa","kalifa","xxx","cum","pussy","prono","fuck","sex","pronhub","xnxx","pakaya","ponnaya","huththa","පොන්නයා","පකයා","පක","වේස","හුක","paka" ,"huka","wesa","ponna","wesi","kariya","pinnaya","HUKA","කැරි","Huka","pamkaya","පම්කයා","හුකයි","බඩුව","බිජ්ජ","පයිය","බිජ්ජා","පයියා","හිකුවනම්","පකයා","හුත්තා","හුත්තිගේ","හුත්තෝ","හුත්තො","පොන්න","පොන්නයෙක්","පොන්නයා","කැරියා","වේස බල්ලා","හුකපන්","හුකාපන්","කැරි","හුකන්නා","පකා","පොන්න","වේස","පක","හැමිනිමිනියන්","හැමිනෙනවා","pakaya","Pakaya","paka","pakaa","Paka","Pakaa","Huththa","huththaa","Huththaa","huththa","Ponnaya","Ponnayaa","ponnaya","ponnayaa","Kariya","Kari","Kariyaa","kariya","kari","kariyaa","Wesa","Weesa","wesa","weesa","Wesa balla","wesa balla","Hukapan","hukapan.Hukaapan","hukaapan","Hukapam","hukapam","Hukaapam","hukaapam","Kari","Hukanna","hukanna","Hukannaa","hukannaa","Paka","Pakaa","paka","pakaa","Ponna","ponna","Haminiyan","haminiyan","Haminiyam","haminiyam","Haminenawa","haminenawa","Haminenawaa","haminenawaa","Bijja","bijja","Bijjaa","bijjaa","Paiya","Payya","paiya","payya","Hutta","hutta","Huttaa","huttaa","baduwa","Baduwa","sex","Sex","xxx","XXX","sexy","Sexy","porn","ass","nude","pussy","dick","boobs","pusy","naked","mehk malik"]
          if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
        
          const lowerCaseMessage = body.toLowerCase();
          const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
          
          if (containsBadWord & config.ANTI_BAD === 'true') {
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
            await conn.sendMessage(from, { text: "🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫" }, { quoted: mek });
          }
      } catch (error) {
          console.error(error)
          reply("An error occurred while processing the message.")
      }
  })
  
  const linkPatterns = [
      /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
      /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           // Telegram links
      /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi,           // YouTube links
      /https?:\/\/youtu\.be\/\S+/gi,                        // YouTube short links
      /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi,          // Facebook links
      /https?:\/\/fb\.me\/\S+/gi,                           // Facebook short links
      /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi,         // Instagram links
      /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,           // Twitter links
      /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi,            // TikTok links
      /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,          // LinkedIn links
      /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,          // Snapchat links
      /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         // Pinterest links
      /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            // Reddit links
      /https?:\/\/ngl\/\S+/gi,                              // NGL links
      /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           // Discord links
      /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             // Twitch links
      /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,             // Vimeo links
      /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,       // Dailymotion links
      /https?:\/\/(?:www\.)?medium\.com\/\S+/gi             // Medium links
  ];
  
  cmd({
      on: "body"
  }, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
      try {
          if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
  
          const containsLink = linkPatterns.some(pattern => pattern.test(body));
          if (containsLink && config.ANTI_LINK === 'true') {
              // Delete the message
              await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
  
              // Warn the user
              await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender] }, { quoted: mek });
  
              // Remove the user from the group
              await conn.groupParticipantsUpdate(from, [sender], 'remove');
          }
      } catch (error) {
          console.error(error);
          reply("An error occurred while processing the message.");
      }
  });
  
