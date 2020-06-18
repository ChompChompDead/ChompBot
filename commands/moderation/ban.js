const Discord = require('discord.js')

module.exports={
    name: "ban",
    description: "Bans someone.",
    usage: "<@user> <reason>",
    run: async(bot,message,args)=>{
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`You do not have the correct permissions to do this command, ${message.author}`)
        }
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`You do not have the correct permissions to do this command, ${message.author}`)
        }

        let target = message.mentions.members.first();

        if(!target) {
            return message.channel.send(`Please specify who you want to ban, ${message.author}`)
        }
        if(!target.banable) {
            return message.channel.send(`I can not ban this user because they have a role higher than me.`)
        }
        if(target.id === message.author.id) {
            return message.channel.send(`You can not ban yourself, dummy.`)
        }
        if(!args[1]) {
            return message.channel.send(`Please specify a reason to ban someone. Don't be stupid.`)
        }

        const Embed = new Discord.MessageEmbed()
        .setColor(1752220)
        .setTitle(`**__${message.author.username}__ has banned someone :wave:**`)
        .setDescription(`${message.author} has banned ${target} (${target.id})`)
        .setFooter(`Well, goodbye for them.`)
        message.channel.send(Embed)

        target.ban(args[1])
    }
}
