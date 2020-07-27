const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
    return message.channel.send("Ow come on, Don't try! You can't!")
    if(message.mentions.users.size === 0) {
        return message.channel.send("You gotta say who you are gonna ban btw..");
    }

    let b = message.guild.member(message.mentions.users.first());

    if(!b) {
        return message.channel.send("The bot can't find the user.");
    }

    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS"))
    return message.channel.send("The bot can't ban anyone.")

    b.ban().then(member => {

        message.channel.send(`**${member.user.username}** has been banned by **${message.author.username}**.`);
        b.send(`You have been banned from **${message.guild.name}** by **${message.author.username}**.`);
    });
};

module.exports.help = {
    name: "ban"
}