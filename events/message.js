const Discord = require("discord.js");
const prefix = "wet ";

module.exports = async(bot, message) => {

    if(message.author.bot) return;
    if(message.channel.type === "DM") return;

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    const cmd = bot.commands.get(command);

    if(!cmd) return message.channel.send("Sorry, that's not a command!");

    cmd.run(bot, message, args);
};