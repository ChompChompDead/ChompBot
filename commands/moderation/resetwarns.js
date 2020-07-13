const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command.")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Please mention the person whose warnings you want to reset.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your own warnings.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings.`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`All of your warnings were reseted by ${message.author.username}.`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}.`)
    
  
    
}
}