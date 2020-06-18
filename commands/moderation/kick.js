const Discord = require('discord.js')

module.exports={
    name: "kick",
    description: "Kicks someone.",
    usage: "<@user> <reason>",
    run: async(bot,message,args)=>{
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`You do not have the correct permissions to do this command, ${message.author}`)
        }
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`You do not have the correct permissions to do this command, ${message.author}`)
        }

        let target = message.mentions.members.first();

        if(!target) {
            return message.channel.send(`Please specify who you want to kick, ${message.author}`)
        }
        if(!target.kickable) {
            return message.channel.send(`I can not kick this user because they have a role higher than me.`)
        }
        if(target.id === message.author.id) {
            return message.channel.send(`You can not kick yourself, dummy.`)
        }
        if(!args[1]) {
            return message.channel.send(`Please specify a reason to kick someone. Don't be stupid.`)
        }

        const Embed = new Discord.MessageEmbed()
        .setColor(1752220)
        .setTitle(`**__${message.author.username}__ has kick someone :wave:**`)
        .setDescription(`${message.author} has kicked ${target} (${target.id})`)
        .setFooter(`Well, goodbye for them.`)
        message.channel.send(Embed)

        target.kick(args[1])
    }
}
