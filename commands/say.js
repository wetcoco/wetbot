const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const sayMessage = args.join(" ");

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")){
        message.delete();
        console.log(`${message.author.username} tried to use the command ${module.exports.help.name} but they don't have the permission KICK_MEMBERS for that!`)
    }
    message.delete();
    message.channel.send(sayMessage)
};

module.exports.help = {
    name: "say"
}