const {MessageEmbed} = require("discord.js")

module.exports={
    name: 'help',
    category: 'info',
    description: 'A help command for this bot.',
    run: async(bot,message,args)=>{
        let Embed = new MessageEmbed()
        .setAuthor('My Prefix is c!')
        .setTitle('**:clipboard:ChompBot Help Commands::clipboard:**')
        .setThumbnail('https://gyazo.com/69a62985db980a4902f76098e3571786.png')
        .addField('**ℹ️ Info commands: ℹ️**', '`ping, help, avatar, userinfo, botinvite`')
        .addField('**⚒️ Moderation Commands: ⚒️**', '`kick, ban`')
        .addField('**😀 Fun Commands: 😀**', '`giveaway, 8ball, clownspam, meme, poll`')
        .setFooter('🤡A ChompBot Message | I am cool.🤡')
        .addField('**🅰️ Text Commands 🅰️**', '`ascii, say`')
        .setColor(1752220)
        message.channel.send(Embed)
    }
}
