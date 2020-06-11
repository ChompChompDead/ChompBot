const {Collection, Client, Discord} = require("discord.js");
const fs = require("fs")
const bot = new Client({
    disableEveryone: true
});
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;
bot.prefix = "c!"
bot.commands = new Collection();
bot.aliases = new Collection();
bot.catergories = fs.readdirSync("./commands/");
["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(bot);
})
const activities_list = [
    "BETA | c!help", 
    "Version 0.1 | c!help",
    "eating pancakes", 
    "being a bot"
    ];

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 10000); 
    console.log(`${bot.user.username} is now online!`)
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome", "welcomes")
    if(!channel) return;

    const Embed = new MessageEmbed()
    .setTitle(`Welcome ${member} to ${guild}!`)
    .setDescription(`Hello ${member}! Thanks for joining our server. Please read #rules and to get pings and roles go to #get-roles . We hope you have a great time here, see you soon!`)
    .setColor(1752220)
    message.channel.send(Embed)
});

bot.on('message', async message=>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const command = bot.commands.get(cmd)
    if(!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) command.run(bot,message,args)
})

bot.login(process.env.token);
