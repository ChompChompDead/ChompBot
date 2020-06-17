const Discord = require("discord.js")


module.exports={
    name: "uptime",
    description: "Sees how long the bot was up.",
    run: async(bot, message, args)=>{
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, and ${sec.padStart(2, '0')} seconds. `
    }

    const Embed = new Discord.MessageEmbed()
    .setTitle('Bot Uptime')
    .setColor(1752220)
    .addField('**🤖 My uptime is: 🤖**', `I have been online for: ${duration(bot.uptime)}`)
    message.channel.send(Embed)

    }
}
