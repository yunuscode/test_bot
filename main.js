const TelegramBot = require('node-telegram-bot-api')
const TOKEN = `1785113428:AAGb6QEKC-vViXnFkCsHj873dJYkgeQDJyg`
const CLICK_TOKEN = `398062629:TEST:999999999_F91D8F69C042267444B74CC0B3C747757EB0E065`

const bot = new TelegramBot(TOKEN, {
    polling: true,
})

const Database = require('./base')
const TextController = require('./controller/TextController')
const db = new Database(`mongodb://localhost/bot`)


bot.on('message', async (message) => {
    
    TextController(message, bot, db)

})
