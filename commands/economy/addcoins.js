const Discord = require('discord.js')
const db = require('quick.db')

module.exports={
    name:"addcoins",
    description: "add coins to someone",
    run:async(bot,message,args)=>{
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply('You do not have the permission, `ADMINISTRATOR`.')
        }

        let user = message.mentions.members.first() || message.author;
        if(!args[0]) return message.reply('Please specify an amount of coins to add.')
        if(isNaN(args[0])) return message.reply('That is not a vaild number.')

        message.channel.send('Successfully added ' + args[0] + ' coins to ' + user.username + '.')

        db.add(`money_${message.author.id}`, args[0])
    }
}