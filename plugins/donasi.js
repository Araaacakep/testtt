let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Pulsa 〕
├ Smartfren : 088233832771
├ Tri : 089612698583
└────
┌〔 Donasi • Non Pulsa 〕
├ Dana : 088233832771
├ Owner : wa.me/6285249231619
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
