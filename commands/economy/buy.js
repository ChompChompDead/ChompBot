const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports={
    name: "buy",
    description: "buy something",
    run: async(bot,message,args)=>{
        let author = db.fetch(`money_${message.author.id}`)

        if(!args[0]) {
            message.channel.send('Please enter in something to buy.')
        }
        if(args[0] === "balloon") {
            if (author < 100) {
                message.reply('You do not have enough coins to buy this item.')
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "balloon")
                db.subtract(`money_${message.author.id}`, 100)
                const embed = new MessageEmbed()
                .setTitle('Item Bought!')
                .setDescription(`You have successfully bought a **balloon**!\nYou have just bought a ballon for __**100**__ coins!\n\nYour balance now: ${author} coins.`)
                .setThumbnail(bot.users.cache.get(message.author.id).displayAvatarURL())
                .setColor(1752220)
                .setFooter(bot.user.username, bot.users.cache.get(message.author.id).displayAvatarURL())
                .setTimestamp()
                message.channel.send(embed)
            }
        }
    }
}