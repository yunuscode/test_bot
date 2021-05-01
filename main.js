const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(TOKEN, {
    polling: true,
})

const Database = require('./base')
const TextController = require('./controller/TextController')
const db = new Database(`mongodb://localhost/bot`)


bot.on('message', async (message) => {
    
    TextController(message, bot, db)

})
