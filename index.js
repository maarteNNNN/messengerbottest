import BootBot from 'bootbot'
import env from 'dotenv'

env.config()
// WORKS
// console.log(process.env.TOKEN)
const bot = new BootBot({
  accessToken: process.env.MESSENGERTOKEN,
  verifyToken: process.env.WEBHOOKTOKEN,
  appSecret: process.env.APPSECRET
})

bot.on('message', (payload, chat) => {
  const txt = payload.message.text
  chat.say(`Echo: ${txt}`)
})

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
  console.log('The user said hello')
  chat.say('Hello, Im created by my master Maarten Coppens')
    .then(() => {
      chat.say('What can I do for you?')
    })
    .then(() => {
      chat.say('Henrique I know it was you that texted me!')
    })
})

bot.start(3000)
