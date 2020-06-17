const Discord = require('discord.js')

module.exports={
    name: "userinfo",
    description: "Someones info.",
    run: async(bot,message,args)=>{
        const user = message.mentions.users.first() || message.author;
        let uEmbed = new Discord.MessageEmbed()
        .setColor(`BLUE`)
        .setTitle("User Info")
        .setThumbnail(bot.users.cache.get(user.id).displayAvatarURL())
        .setAuthor(`${message.author.username}'s Info!`, bot.users.cache.get(user.id).displayAvatarURL())
        .addField("**Username:**", `${message.author.username}`,true)
        .addField("**User Tag:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`,true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Account Created At:**", `${message.author.createdAt}`,true)
        message.channel.send(uEmbed)
    }
}
