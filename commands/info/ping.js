const Discord = require('discord.js')
const bot = new Discord.Client()
const MessageEmbed = require('discord.js')

module.exports={
    name:'ping',
    description:"Returns API and Latency Ping",
    run: async(bot,message,args)=>{
        const msg = await message.channel.send(`:ping_pong: Pinging...`)
        const Embed = new Discord.MessageEmbed()
        .setTitle(':ping_pong: Pong!')
        .setDescription(`Your API Ping is: ${Math.round(bot.ws.ping)}ms\nYour Latency Ping is:  ${msg.createdTimestamp - message.createdTimestamp}ms`)
        .setColor(1752220)
        msg.edit(Embed)
    }
}
