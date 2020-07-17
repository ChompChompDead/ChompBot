const {MessageEmbed} = require("discord.js")
module.exports={
    name:"botinvite",
    category:"info",
    description: "A link to invite ChompBot",
    run: async(bot,message,args)=>{
        const Embed = new MessageEmbed()
        .setTitle('ChompBot Invite Link')
        .setDescription(`To invite ChompBot, click on this link below.\nhttp://chompbot.ml`)
        .setFooter('Have fun with ChompBot! | A ChompBot Message.')
        .setColor(1752220)
        message.channel.send(Embed)
    }
}
