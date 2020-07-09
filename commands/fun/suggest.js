const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    category: "main",
    usage: "<message>",
    description: "suggest anything you wanted to",
    run: async (client, message, args) => {
    message.delete()

    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel.send(`Please provide a suggestion!`)

    let sChannel = message.guild.channels.cache.find(x => x.name === "suggestions")
      if(!sChannel) return message.channel.send("You do not have a channel with name, `suggestions`. In order for this command to work, please make a channel called `suggestions`.")
    let user = message.author
    message.channel 
      .send("Your suggestion has been sent.")
    let suggestembed = new MessageEmbed()
      .setFooter(client.user.username, client.users.cache.get(user.id).displayAvatarURL())
      .setTimestamp()
      .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
      .addField(`New Suggestion from:`, `**${message.author.tag}**`)
      .addField(`Suggestion:`, `${suggestion}`)
      .setColor(1752220);
    sChannel.send(suggestembed).then(async msg => {
      await msg.react("✅");
      await msg.react("❌");
    });
  }
};