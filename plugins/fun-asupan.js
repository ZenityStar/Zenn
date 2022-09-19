let handler = async (m, { conn, usedPrefix, command }) => {
    let vid = 'https://api.zacros.my.id/asupan/random'
conn.sendButtonVid(m.chat, vid, '𝑫𝒐𝒏𝒆𝒆', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.premium = true,
handler.command = /^(asupan)$/i

module.exports = handler
