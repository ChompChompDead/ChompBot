const {MessageEmbed} = require("discord.js")
module.exports={
    name:"topic",
    category:"fun",
    description:"Revives chat with a topic.",
    run: async(bot,message,args)=>{
        let responses = [
            "If you could make up a school subject, what would it be?",
            "What is your very favorite letter of the alphabet? Why?",
            "If someone gave you 20 dollars, what would you buy with it?",
            "If you had a chance to eat dessert for breakfast every day, what dessert would you choose?",
            "What is the first thing you think about when you wake up in the morning?",
            "Which animal at the zoo do you like best?",
            "If your friend is sad, what do you do to make them feel better?",
            "If you had the opportunity to invent a new ice cream flavor, what would it be?",
            "What is the silliest thing someone has ever said to you?",
            "What’s your favorite word?",
            "If you had a robot for the entire day, what would you ask it to do?",
            "Do you prefer cold weather or hot weather?",
            "If you never had to eat one vegetable, which would it be?",
            "What was the last thing that made you smile?",
            "What is your favorite part about school? Your least favorite?",
            "How do you make friends?",
        ]
        let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
        let Embed = new MessageEmbed()
        .setTitle('**A New Chat Topic**')
        .setColor(1752220)
        .setDescription('**The Topic: **'+Response)
            message.channel.send(Embed)
        }

    }

