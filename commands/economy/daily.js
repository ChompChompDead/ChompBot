const db = require('quick.db')
const ms = require('parse-ms')
const { MessageEmbed } = require('discord.js')

module.exports={
    name: "daily",
    description: "Get your daily coins",
    run:async(bot,message,args)=>{
        let daily = await db.fetch(`daily_${message.author.id}`)
        let timeout = 86400000
        let amount = Math.floor(Math.random() * 600) +100
        let user = message.author;
        let money = db.fetch(`money_${user.id}`)
        if(daily != null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
            const Wembed = new MessageEmbed()
            .setTitle(`Cooldown`)
            .setDescription(`**Hey, you! You can't just spam daily coins.**\nYou can come back in: __**${time.hours}h ${time.minutes}m ${time.seconds}s**__`)
            .setThumbnail(bot.users.cache.get(user.id).displayAvatarURL())
            .setTimestamp()
            .setFooter(bot.user.username, bot.users.cache.get(user.id).displayAvatarURL())
            .setColor(`RED`)
            message.channel.send(Wembed)
        } else {
            db.add(`money_${message.author.id}`, amount)
            db.add(`daily_${message.author.id}`, Date.now())

            let embed = new MessageEmbed()
            .setColor(1752220)
            .setTitle(`Daily Coins`)
            .setThumbnail(bot.users.cache.get(user.id).displayAvatarURL())
            .setDescription(`Here is your coins for today! :D Come back tomorrow!\nYou got: ${amount} coins!\n\nTotal coins now: __**${money} coins**__!`)
            .setTimestamp()
            .setFooter(bot.user.username, bot.users.cache.get(user.id).displayAvatarURL())
            message.channel.send(embed)
        }
    }
}
