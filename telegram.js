const TelegramBot = require("node-telegram-bot-api");
const buddy = new TelegramBot(
  "7101608307:AAFfFs9fkHv4TfE73heqNErmpr0yF5TwF04",
  { polling: true }
);

const chatId = 152162313;
function sendMessageToBuddy(message) {
  buddy.sendMessage(chatId, message);
}

module.exports = { buddy, sendMessageToBuddy };
