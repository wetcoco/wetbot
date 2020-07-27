const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
    return message.channel.send("Ow come on, Don't try! You can't!")
    if(message.mentions.users.size === 0) {
        return message.channel.send("You gotta say who you are gonna kick btw..");
    }

    let k = message.guild.member(message.mentions.users.first());

    if(!k) {
        return message.channel.send("The bot can't find the user.");
    }

    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS"))
    return message.channel.send("The bot can't kick anyone.")

    k.kick().then(member => {

        message.channel.send(`**${member.user.username}** has been kicked by **${message.author.username}**.`);
        k.send(`You have been kicked from **${message.guild.name}** by **${message.author.username}**.`);
    });
};

module.exports.help = {
    name: "kick"
}