  module.exports = {
    name: "say",
    description: "Bot says stuff",
    usage: "<msg>",
    run: async (bot, message, args) => {
      const user = message.author
      if (user.id === "724752187854553220") return message.channel.send('ur not allowed to use this specter');
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    },
  };
