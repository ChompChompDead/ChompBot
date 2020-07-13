const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports={
    name: "backpack",
    descrption: "check your inventory",
    run: async(bot,message,args)=>{
        let items = db.get(message.author.id)
        let user = message.author
        if(items === null) items = "This user has nothing in their backpack."

        const embed = new MessageEmbed()
        .setTitle(`${message.author.username}'s Backpack!`)
        .setColor(1752220)
        .addField("Backpack", items)
        message.channel.send(embed)
    }
}