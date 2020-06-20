const Discord = require('discord.js')
const bot = new Discord.Client()

module.exports={
    name: "botinfo",
    description: "info about this bot",
    run: async(bot,message,args)=>{
        let bicon = 'https://i.gyazo.com/b93151f233d823846a2346f4f79ec5c9.png'
        let servsize = bot.guilds.cache.size
        let botembed = new Discord.MessageEmbed()
        .setColor(`BLUE`)
        .setTitle('ℹ️ ChompBot\'s Info ℹ️ ')
        .setThumbnail(bicon)
        .addField("**General Info**",[
            `**🏷️ Bot Name:** ${bot.user.username}`,
            "**🕴️ Bot Owner:** <@514530713312428054>",
            `**🟢 Bot Status:** ${bot.user.presence.status}`,
        ])
        .addField("**Bot Statistics**",[
            `**🛡 Servers In:** ${servsize}`,
            `**💻 Language:** Discord Javascript`,
            "**📜 Node Version:** 12.16.3 LTS",
        ])
        .addField("👶 Bot Made On", bot.user.createdAt)
        .setTimestamp()
        message.channel.send(botembed)
    
    }
}