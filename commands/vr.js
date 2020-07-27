const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    message.channel.send("This messages has been made while using a VR Headset! :flushed:");
    message.channel.send("\nDesktop PC, OMEN Obelisk\nhttps://www.omen.com/us/en/desktops/obelisk.html");
    message.channel.send("\nVR Headset used:\nhttps://www.oculus.com/rift-s/?locale=en_GB");
    message.channel.send("\nThis command was coded:\nSome few miles away from my stupid dad.");
};

module.exports.help = {
    name: "vr"
}