let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'Halo, Saya ImanBot, Saya diciptakan Oleh Seseorang Manusia yang bernama Zenity, Tujuan bot ini dibuat adalah sekedar hiburan dan menambah pengetahuan :D\n\n𝑵𝒐𝒕𝒆: 𝑮𝒖𝒏𝒂𝒌𝒂𝒏 𝒃𝒐𝒕 𝒅𝒆𝒏𝒈𝒂𝒏 𝒃𝒂𝒊𝒌 𝒅𝒂𝒏 𝒃𝒊𝒋𝒂𝒌 𝒂𝒈𝒂𝒓 𝒕𝒊𝒅𝒂𝒌 𝒕𝒆𝒓𝒃𝒂𝒏𝒏𝒆𝒅', data.namabot, '𝑳𝒊𝒔𝒕 𝑴𝒆𝒏𝒖', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: '𝑱𝒂𝒏𝒈𝒂𝒏 𝒅𝒊 𝒔𝒑𝒂𝒎 𝒚𝒂 𝒌𝒂𝒌',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


