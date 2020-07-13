const db = require('quick.db')
const ms = require('parse-ms')
const { MessageEmbed } = require('discord.js')

module.exports={
    name: "work",
    description: "work for coins",
    run: async(bot,message,args)=>{
        let timeoutworked = 3600000
        let worked = await db.fetch(`workedWork_${message.author.id}`)
        let user = message.author;
        let money = db.fetch(`money_${user.id}`)

        if(worked != null && timeoutworked - (Date.now() - worked) > 0) {
            let time = ms(timeoutworked - (Date.now() - worked));
            const embed = new MessageEmbed()
            .setTitle(`Work Cooldown`)
            .setDescription(`**Hey, you need to wait before you can work again!**\nPlease come back in: __**${time.hours}h ${time.minutes}m ${time.seconds}s**__.`)
            .setColor(`RED`)
            .setThumbnail(bot.users.cache.get(user.id).displayAvatarURL())
            .setFooter(bot.user.username, bot.users.cache.get(user.id).displayAvatarURL())
            .setTimestamp()
            message.channel.send(embed)
        } else {
            let workedcash = Math.floor(Math.random() * 200) +25

            let jobs = ["Developer", "Farmer", "Astronaut", "Chef", "Doctor", "Scientist", "Janitor", "Shopkeeper", ""]
            let job = jobs[Math.floor(Math.random()* jobs.length)]
            
            const Qembed = new MessageEmbed()
            .setTitle(`You worked!`)
            .setDescription(`**Hey! You just finished working at your job.**\nYou worked as a ${job} and got: __**${workedcash}**__ coins!\n\nTotal coins now: __**${money} coins**__.`)
            .setColor(1752220)
            .setThumbnail(bot.users.cache.get(user.id).displayAvatarURL())
            .setFooter(bot.user.username, bot.users.cache.get(user.id).displayAvatarURL())
            .setTimestamp()
            message.channel.send(Qembed)
            
            db.add(`money_${message.author.id}`, workedcash)
            db.add(`workedWork_${message.author.id}`, Date.now())
        }
    }
}
