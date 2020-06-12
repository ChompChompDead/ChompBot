const {MessageEmbed} = require('discord.js')

module.exports={
    name: "mathhelp",
    category: "info",
    description: "Help with math commands",
    run: async(bot,message,args)=>{
        const Embed = new MessageEmbed()
        .setTitle('🔢 All Math Commands')
        .setDescription(`\n\n**+** is to multiply\n**-** is to subtract\n*  is to multiply\n**/** is to subtract\n^ is to power a number by another number.`)
        .setFooter('Math Commands | Still a ChompBot Message.')
    }
}
