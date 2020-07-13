const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports={
    name: "balance",
    description: "checks your balance",
    run: async(bot,message,args)=>{
        let user = message.mentions.users.first() || message.author;
        let money = db.fetch(`money_${user.id}`)

        if(money === null) money = 0
        
        const Embed = new MessageEmbed()
        .setTitle(`Balance`)
        .setDescription(`**${user.username}'s balance!**\nYou currently have: __${money} coins!__`)
        .setColor(1752220)
        .setThumbnail(bot.users.cache.get(user.id).displayAvatarURL())
        .setTimestamp()
        .setFooter(bot.user.username, bot.users.cache.get(user.id).displayAvatarURL())
        message.channel.send(Embed)
    }
}