const { MessageEmbed } = require('discord.js')

module.exports={
    name:"shop",
    description:"look at shop",
    run: async(bot,message,args)=>{
        const embed = new MessageEmbed()
        .setTitle(`${bot.user.username}'s Shop!`)
        .setDescription('If you want to buy an item, do c!buy <item>. Also you have to make sure the item is all lowercase, like Balloon to balloon.')
        .addField('**Balloon**', '100 Coins')
        .setThumbnail(bot.users.cache.get(message.author.id).displayAvatarURL())
        .setColor(`BLUE`)
        .setTimestamp()
        .setFooter('Page 1/1')
        message.channel.send(embed)
    }
}