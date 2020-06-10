const {MessageEmbed} = require("discord.js");

module.exports={
  name: "avatar",
  category: "info",
  description: "S=hows your or someone elses avatar.",
  run: async(bot,message,args)=>{
      const user = message.mentions.users.first() || message.author;
      let embed = new MessageEmbed()
      .setColor(1752220)
      .setTitle(`${user.tag}s profile picture!`)
      .setImage(bot.users.cache.get(user.id).displayAvatarURL());
      message.channel.send(embed);
  }
}