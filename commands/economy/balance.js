const fs = require('fs')
module.exports={
    name:"balance",
    aliases: ['bal'],
    category: "economy",
    description: "Checks the amount of cash you have!",
    run: async(bot,message,args)=>{
            if(args[0]) {
                var user = message.author;
            } else {
                var user = message.mentions.users.first() || bot.users.get(args[0])
            }

            if(money[user.id]) {
                money[user.id] = {
                    name: bot.users.get(user.id).tag,
                    money: 0
                }
                fs.writeFile("./money.json", JSON.stringify(money), (err) => {
                    if(err) console.log(err);
                })
            }
            return message.channel.send(`${bot.users.get(user.id).username} has $${money[user.id]} cash.`)
    }
}