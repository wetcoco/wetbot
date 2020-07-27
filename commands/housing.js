const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.channel.send("How to join wetmoon's housing:\n1. Join Hypixel.\n2. Type /lobby housing\n3. Type /visit wetmoon\n4. Click on \"30LVLS=[RES]\"\n5. Have fun!")
};

module.exports.help = {
    name: "housing"
}