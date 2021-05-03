const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const TOKEN = process.env.TOKEN
const CLICK_TOKEN = process.env.CLICK_TOKEN

const bot = new TelegramBot(TOKEN, {
    polling: true,
})

const Database = require('./base')
const CallbackController = require('./controller/CallbackController')
const TextController = require('./controller/TextController')
const db = new Database(`mongodb://localhost/bot`)


bot.on('message', async (message) => {
    
    TextController(message, bot, db)

})

bot.on('callback_query', async (callback_query) => {
    await CallbackController(callback_query, bot, db)
})
