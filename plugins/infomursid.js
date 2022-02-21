let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ ✎ _Nama_ : Aracakep
│ ✎ _Sekolah_ : -
│ ✎ _Umur_ : 14
│ ✎ _Asal_ : kutai barat
│ ✎ _Status_ : Pelajar 
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/HXXTNMIjz5oBeIYdarMJG5
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HRdnYLYBxOC8RoBlXs5EIV
│ ✎ _Instagram_ : 
│    instagram.com/Alyastephani_
│ ✎ _WhatsApp_ :
│    wa.me/6285249231619
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infomursid']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler
