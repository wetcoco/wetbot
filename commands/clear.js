const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Sorry but you can't do that!").catch(console.error);

    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Sorry but the bot can't do that!").catch(console.error);

    if(!args[0])
    return message.channel.send("How much messages do you wanna delete?");

    if(isNaN(args[0]))
    return message.channel.send("How much messages do you wanna delete?")

    message.channel.bulkDelete(args[0]);
    message.channel.send(`**${args[0]}** messages has been deleted.`);

}

module.exports.help = {
    name: "clear"
}