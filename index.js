const TelegramBot = require('node-telegram-bot-api');

const token = "5800855260:AAFBHRucLpT2BijDAgOdkKy45ZrxB2K_VjI";
const webAppUrl = 'https://ya.ru';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'App', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})

