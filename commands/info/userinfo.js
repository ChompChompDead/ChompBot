const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions");
module.exports = {
  name: "userinfo",
  description: "Get your own or someone else's user info.",
  usage: "[user mention]",
  category: "fun",
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`Your info!`);
      Embed.setThumbnail(message.author.displayAvatarURL());
      Embed.setColor(1752220);
      Embed.setDescription(
        `**Joined Server At:** (MM/DD/YYYY) ${formatDate(message.member.joinedAt)}\n**User ID:** ${
          message.author.id
        }\n**Roles:** ${roles}`
      );
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s info!`);
      Embed.setThumbnail(bot.users.cache.get(User.id).displayAvatarURL());
      Embed.setColor(1752220);
      Embed.setDescription(
        `**Joined Server At:** (MM/DD/YYYY) ${formatDate(User.joinedAt)}\n**User ID:** ${
          User.id
        }\n**Roles:** ${roles}`
      );
      return message.channel.send(Embed);
    }
  },
};
