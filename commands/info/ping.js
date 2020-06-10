const {MessageEmbed} = require('discord.js')
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns Latency and API Ping.',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('🏓 Pinging...')
        const Embed = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setDescription(`Your Latency Ping is: ${msg.createdTimeStamp - message.createdTimeStamp}ms\nYour API Ping is: ${Math.round(bot.ws.ping)}ms.`)
        .setColor(1752220)
        msg.edit(Embed)
    }
}