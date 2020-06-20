  module.exports = {
    name: "say",
    description: "Bot says stuff",
    usage: "<msg>",
    run: async (bot, message, args) => {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    },
  };