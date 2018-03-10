import BootBot from 'bootbot'
import env from 'dotenv'
import encrypt from 'greenlock-express'

env.config()
// WORKS
// console.log(process.env.MESSENGERTOKEN)
const bot = new BootBot({
  accessToken: process.env.MESSENGERTOKEN,
  verifyToken: process.env.WEBHOOKTOKEN,
  appSecret: process.env.APPSECRET
})

bot.on('message', (payload, chat) => {
  const txt = payload.message.text
  console.log(txt)
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

// encrypt.create({
//   server: 'staging',
//   email: 'martinuske@gmail.com',
//   agreeTos: true,
//   approveDomains: ['13bazar.com.br'],
//   app: bot.start(3000)
// }).listen(80, 433, 3000)

bot.start()
