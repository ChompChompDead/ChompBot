const {MessageEmbed} = require("discord.js")

module.exports={
    name: 'help',
    category: 'info',
    description: 'A help command for this bot.',
    run: async(bot,message,args)=>{
        let Embed = new MessageEmbed()
        .setAuthor('My Prefix is c!')
        .setTitle('**:clipboard:ChompBot Help Commands::clipboard:**',true)
        .setThumbnail('https://gyazo.com/69a62985db980a4902f76098e3571786.png',true)
        .addField('**ℹ️ Info commands: ℹ️**', '`ping, help, avatar, userinfo, botinvite, uptime`',true)
        .addField('**⚒️ Moderation Commands: ⚒️**', '`kick, ban`',true)
        .addField('**😀 Fun Commands: 😀**', '`giveaway, 8ball, clownspam, meme, poll`',true)
        .setFooter('🤡A ChompBot Message | I am cool.🤡')
        .addField('**🅰️ Text Commands 🅰️**', '`ascii, say`',true)
        .setColor(1752220)
        message.channel.send(Embed)
    }
}
