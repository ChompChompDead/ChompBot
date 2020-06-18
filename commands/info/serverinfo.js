const Discord = require('discord.js')
const moment = require('moment')

module.exports={
    name: "serverinfo",
    description: "Tells the info of a server.",
    run: async(bot,message,args)=>{
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString())
        const members = message.guild.members.cache
        const channels = message.guild.channels.cache
        const emojis = message.guild.emojis.cache


        const Embed = new Discord.MessageEmbed()
        .setColor(1752220)
        .setTitle(`${message.guild.name}'s Server Info`)
        .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
        .addField('ℹ️ **Server General** Info ℹ️', [
            `**📛 Server Name: 📛** ${message.guild.name}`,
            `**🆔 Server ID: 🆔** ${message.guild.id}`,
            `**🕴️ Server Owner: 🕴️** ${message.guild.owner.user.tag}`,
            `**🌎 Server Region: 🌎** ${message.guild.region}`,
            `**✅ Server Verification Level: ✅** ${message.guild.verificationLevel}`,
            `\u200b`    
        ])
        .addField('📊 **Server Statistics** 📊', [
            `**🇷 Server Role Count: 🇷** ${roles.length}`,
            `**😀 Server Emoji Count: 😀** ${emojis.size}`,
            `**🧍 Server Member Count: 🧍** ${message.guild.memberCount}`,
            `**🧔 Server Human Count: 🧔** ${members.filter(member => !member.user.bot).size}`,
            `**🤖 Server Bot Count: 🤖** ${members.filter(member => member.user.bot).size}`,
            `**💬 Server Text Channels: 💬** ${channels.filter(channel => channel.type === 'text').size}`,
            `**📢 Server Voice Channels: 📢** ${channels.filter(channel => channel.type === 'voice').size}`,
            `**💨 Server Boost Count: 💨** ${message.guild.premiumSubscriptionCount || '0'}`,
            `\u200b`
        ])
        message.channel.send(Embed)
    }
}
