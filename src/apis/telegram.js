const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const {
  formatBirthdayMessage,
} = require('../utils/telegramFormatMessage');

const token = 'your-telegram-token'; // TODO: add your token here
const bot = new TelegramBot(token, { polling: true });
const chatId = 'your-chat-id'; // TODO: add your chat id here

const sendMessageGoodMorning = async () => {
  const helloMsg =
    '🤵🏻 Mr. Carson:\n\n - Hello, my lady 👸🏻, my lord 🤴🏻,\naqui estão os lembretes da manhã 🌞\n\n🖋📨';
  await bot.sendMessage(chatId, helloMsg);
};

const sendMessageBirthdays = async (birthDaysRecords) => {
  await bot.sendMessage(chatId, formatBirthdayMessage(birthDaysRecords));
};
const hasBirthdays = ([sameDayRecords, sevenDaysRecords, fifteenDaysRecords, thirtyDaysRecords]) =>
  sameDayRecords.length ||
  sevenDaysRecords.length ||
  fifteenDaysRecords.length ||
  thirtyDaysRecords.length;

const sendMessages = async (birthDaysRecords) => {
  if (hasBirthdays(birthDaysRecords)) {
    await sendMessageGoodMorning();
    await sendMessageBirthdays(birthDaysRecords);
  }
};

module.exports = { sendMessages };
