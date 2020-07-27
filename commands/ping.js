const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let start = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`Pong! ${Date.now() - start}ms.`));
};

module.exports.help = {
    name: "ping"
}