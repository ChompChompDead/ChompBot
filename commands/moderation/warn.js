const warns = require('../../models/warns');
module.exports={
    name: "warn",
    description: "Warn a user",
    category: "moderation",
    usage: "<@user> <reason>",
    run: async(bot,message,args)=>{
        if(!message.member.hasPermissions("KICK_MEMBERS")) {
            return message.channel.send(`You do not have the correct permissions to do this command, ${message.author}.`)        
        }
        if(!message.member.me.hasPermissions("KICK_MEMBERS")) {
            return message.channel.send(`You do not have the correct permissions to do this command, ${message.author}.`)        
        }
        
        let user = messgae.mentions.users.first()
        if(!user) return message.channel.send(`You need to mention a user, ${message.author}.`)
        if(!args.slice(1).join(" ")) return message.channel.send(`You need to have a reason to warn, ${message.author}. Why would you warn anyways?`)
        warns.findOne({ Guild: message.guild.id, User: user.id }),async(err, data)=>{
            if(err) console.log(err)
            if(!data){
                let newWarns = new warns;({
                    User: user.id,
                    Guild: message.guild.id,
                    Warns:[
                        {
                            Moderator: message.author.id,
                            Reason: args.slice(1).join(" "),
                        },
                    ],
                })
                newWarns.save
                message.channel.send(`${user.tag} has been warned because ${args.slice(1).join(" ")}. They now have 1 warn.`)
            } else {
                data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" "),
                });
                data.save();
                message.channel.send(
                  `${user.tag} has been warned with the reason of ${args
                    .slice(1)
                    .join(" ")}. They now have ${data.Warns.length} warns.`
                );
            }

        };
    },
};
