const db = require('quick.db')

module.exports={
    name: "setwelcome",
    description: "sets welcome channel",
    run: async(bot,message,args)=>{
        let channel = message.mentions.channels.first()

        if (!channel) {
            message.channel.send('Please mention a channel for me to set the welcomes in.')
        }

        db.set(`wChannel_${message.guild.id}`, channel.id)

        message.channel.send(`Successfully set the welcome to ${channel}.`)
    }
}