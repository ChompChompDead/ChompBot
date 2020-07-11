const { MessageEmbed } = require('discord.js')
const { promptMessage } = require('../../functions.js')

const chooseArr = ['⛰️','📰','✂️'];

module.exports={
  name:"rps",
  description: "Play rock, paper, and scissors with a bot",
  run: async(client,message,args)=>{
    const embed = new MessageEmbed()
    .setColor(1752220)
    .setFooter(client.user.username, client.user.displayAvatarURL)
    .setDescription(`**Add a reaction to one of these emojis to play the game!**\n(Please wait for all emojis to load first.)`)
    .setTimestamp()
    const m = await message.channel.send(embed)
    const reacted = await promptMessage(m, message.author, 30, chooseArr);

    const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

    const result = await getResult(reacted, botChoice)
    await m.reactions.removeAll();

    embed
    .setDescription("")
    .addField(result, `${reacted} vs ${botChoice}`)
    m.edit(embed)

    function getResult(me, clientChosen) {
      if((me === "⛰️" && clientChosen === "✂️") ||
         (me === "📰" && clientChosen === "⛰️") ||
         (me === "✂️" && clientChosen === "📰")) {
            return "You won! :D";
         } else if (me === clientChosen) {
            return "Its a tie!"
         } else {
            return "You lost :("
         }
    }
  }
}
