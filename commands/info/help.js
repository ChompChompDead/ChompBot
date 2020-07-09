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
        .addField('**ℹ️ Info commands: ℹ️**', '`ping, help, avatar, userinfo, botinvite, uptime, serverinfo, botinfo, corona`')
        .addField('**⚒️ Moderation Commands: ⚒️**', '`kick, ban`')
        .addField('**😀 Fun Commands: 😀**', '`giveaway, 8ball, clownspam, meme, poll, say, ascii, suggest`')
        .addField('**🐕 Animal Commands 🐱**', '`dog, cat, bird, fox, koala, panda`')
        .setFooter('🤡A ChompBot Message | I am cool.🤡')
        .setColor(1752220)
        message.channel.send(Embed)
    }
}
