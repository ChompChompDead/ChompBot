const db = require('quick.db')

module.exports={
    name:"warn",
    description: "Warns someone",
    run:async(client,message,args)=>{
        if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("You need the permission `BAN_MEMBERS` to use this command.")
        }
        
        const user = message.mentions.members.first()
        
        if(!user) {
        return message.channel.send("Please mention the person to who you want to warn.")
        }
        
        if(message.mentions.users.first().bot) {
        return message.channel.send("You can not warn bots.")
        }
        
        if(message.author.id === user.id) {
        return message.channel.send("You can not warn yourself.")
        }
        
        if(user.id === message.guild.owner.id) {
        return message.channel.send("Bruj. Why would you warn the owner?")
        }
        
        const reason = args.slice(1).join(" ")
        
        if(!reason) {
        return message.channel.send("Please provide reason to warn the person.")
        }
        
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        
        if(warnings === 3) {
        return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
        }
        
        if(warnings === null) {
        db.set(`warnings_${message.guild.id}_${user.id}`, 1)
        user.send(`You have been warned in **${message.guild.name}** for ${reason}.`)
        await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}.`)
        } else if(warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
        user.send(`You have been warned in **${message.guild.name}** for ${reason}.`)
        await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}.`)
        }
        
    
    } 
}
