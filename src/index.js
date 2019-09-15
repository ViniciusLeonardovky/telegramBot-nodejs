require("dotenv/config");
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const collectMessages = [];
const commands = [
  "/sugestão",
  "/sugestao",
  "/SUGESTÃO",
  "/SUGESTAO",
  "/opinião",
  "/OPINIÃO",
  "/OPINIAO",
  "/opiniao",
  "/OPINAR",
  "/opinar",
  "/SUGESTIONAR",
  "/sugestionar",
  "/qtd"
];

/*
function UserAvaliation(userAvaliationContent, userChatId) {
  if (!commands.includes(userAvaliationContent)) {
    return bot.sendMessage(
      userChatId,
      `Obrigado pela sua avaliação.\nSua mensagem foi recebida com sucesso e será analisada.`
    );
  }
}
*/

bot.on("message", msg => {
  const chatId = msg.chat.id; // Id do chat
  const messageContent = msg.text; // Conteúdo da mensagem
  const userName = msg.from.first_name; // Nome do usuario

  /** Verificar se o valor digitar não for um dos comandos validos;
   *  Caso for um comando existente, ele não será adicionando na contagem;
   *  Caso contrário, o conteúdo será adicionado.
   */
  if (!commands.includes(messageContent)) {
    collectMessages.push(messageContent);
  }
  // UserAvaliation(messageContent, chatId);
  if (
    messageContent.toUpperCase() === "/SUGESTÃO" ||
    messageContent.toUpperCase() === "/SUGESTAO"
  ) {
    bot.sendMessage(
      chatId,
      `Olá Sr, Sr(a) ${userName}!\nPara sugestões, digite em uma mensagem abaixo (iniciando com "/sugestionar", exemplo: "/sugestionar Essa é minha sugestão.").`
    );
  } else if (
    messageContent.toUpperCase() === "/OPINIÃO" ||
    messageContent.toUpperCase() === "/OPINIAO"
  ) {
    return bot.sendMessage(
      chatId,
      `Olá Sr, Sr(a) ${userName}!\nPara expressar sua opinião, digite suas considerações em uma mensagem abaixo (iniciando com "/opinar", exemplo: "/opinar Essa é minha opinião.")..`
    );
  } else if (messageContent.toUpperCase().includes("/OPINAR")) {
    return bot.sendMessage(
      chatId,
      "Obrigado pela sua opinião.\nSua mensagem foi recebida com sucesso e será analisada."
    );
  } else if (messageContent.toUpperCase().includes("/SUGESTIONAR")) {
    return bot.sendMessage(
      chatId,
      "Obrigado pela sua sugestão.\nSua mensagem foi recebida com sucesso e será analisada."
    );
  } else if (messageContent.toUpperCase() === "/QTD") {
    return bot.sendMessage(
      chatId,
      `Total de mensagens: ${collectMessages.length}`
    );
  }
});
