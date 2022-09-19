let handler = async (m, { conn }) => {
    let { anon, anticall, backup, jadibot, groupOnly, epe, tag, self } = global.db.data.settings

    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)


      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
      ┌─〔 𝚂𝚃𝙰𝚃𝚄𝚂 〕
      ├ 𝑶𝒏𝒍𝒊𝒏𝒆 𝑺𝒆𝒍𝒂𝒎𝒂 ${uptime}
      ├ *${groups.length}* 𝑮𝒓𝒖𝒃
      ├ *${chats.length - groups.length}* 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕
      ├ *${Object.keys(global.db.data.users).length}* 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂
      ├ ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* 𝑻𝒆𝒓𝒃𝒍𝒐𝒌𝒊𝒓'}
      ├ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* 𝑪𝒉𝒂𝒕 𝑻𝒆𝒓𝒃𝒂𝒏𝒏𝒆𝒅
      ├ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂 𝒕𝒆𝒓𝒃𝒂𝒏𝒏𝒆𝒅
      └────
      ┌─〔 𝚂𝙴𝚃𝚃𝙸𝙽𝙶 〕
      ├ ${anon ? '✅' : '❌'} *𝑨𝒏𝒐𝒏 𝑪𝒉𝒂𝒕*
      ├ ${anticall ? '✅' : '❌'} *𝑨𝒏𝒕𝒊 𝑪𝒂𝒍𝒍*
      ├ ${backup ? '✅' : '❌'} *𝑨𝒖𝒕𝒐 𝑩𝒂𝒄𝒌𝒖𝒑 𝑫𝑩*
      ├ ${groupOnly ? '✅' : '❌'} *𝑴𝒐𝒅𝒆 𝑮𝒓𝒖𝒃*
      ├ ${jadibot ? '✅' : '❌'} *𝑱𝒂𝒅𝒊 𝑩𝒐𝒕*
      ├ ${tag ? '✅' : '❌'} *𝑨𝒏𝒕𝒊 𝒕𝒂𝒈 𝒐𝒘𝒏𝒆𝒓*
      ├ ${self ? '✅' : '❌'} *𝑴𝒐𝒅𝒆 𝑺𝒆𝒍𝒇*
      └────
      `,  
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['stats']
handler.tags = ['about']
handler.command = /^(stat?s?|bot(stat?s?|alive))$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
