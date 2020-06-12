const calculator = require('../../functions')

module.exports={
    name: 'math',
    category: 'mathfolder',
    description: "Does your math homework!",
    run: async(bot,message,args)=>{
        if(!args[0]) return message.channel.send('Please give me your first number.')
        if(!args[1]) return message.channel.send('You did not give me an operation to perform.')
        if(!args[2]) return message.channel.send('Please give me your second number.')
        message.channel.send(calculator(args[0], args[1], args[2]))
    }
}