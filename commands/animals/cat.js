  const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "cat",
    category: "animals",
    run: async (bot, message, args) => {
        const url = "https://some-random-api.ml/img/cat";

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Just a cat.`)
            .setColor(175220)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}