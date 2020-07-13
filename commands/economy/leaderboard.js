const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports={
    name: "leaderboard",
    description: "see who has most coins",
    run: async(bot,message,args)=>{
        let lb = db.all().filter(a => a.ID.startsWith('money_')).sort((a, b) => b.data - a.data)

        let i = 0;
        let place = 1;
        let txt = "";
        
        for(i in lb) {
            txt += `**${place++}**. <@${lb[i].ID.split('_')[1]}> - ${lb[i].data} coins\n`;
        }
        const embed = new MessageEmbed()
        .setTitle('Coins Leaderboard')
        .setDescription(txt)
        .setThumbnail(bot.users.cache.get(message.author.id).displayAvatarURL())
        .setFooter(bot.user.username, bot.users.cache.get(message.author.id).displayAvatarURL())
        .setTimestamp()
        .setColor(`BLUE`)
        message.channel.send(embed)
    }
}
