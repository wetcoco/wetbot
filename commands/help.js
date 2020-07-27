const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {

    message.channel.send("Help sent in DMs! :mailbox_with_mail:")
    message.author.send({
        embed: {
            color: 0xe61616,
            title: `**${message.author.username}** asked for help!`,
            thumbnail: {
                url: message.author.displayAvatarURL
            },
            fields: [
            {
                name: "The prefix is",
                value: "wet "
            },
            {
                name: "wet help",
                value: "Shows you this page!"
            },
            {
                name: "wet ping",
                value: "Shows you the bot's ping!"
            },
            {
                name: "wet housing",
                value: "Shows you how to join wetmoon's housing!"
            },
            {
                name: "wet stats",
                value: "Shows you your stats!"
            },
            {
                name: "\n\nwet warn",
                value: "Warn bad people!"
            },
            {
                name: "wet kick",
                value: "Kick bad people!"
            },
            {
                name: "wet ban",
                value: "Ban bad people!"
            },
            {
                name: "wet clear",
                value: "Clear messages!"
            },
            
            {
                name: "\n\nwet neko",
                value: "Shows you a picture of a neko!"
            },
            {
                name: "wet slap",
                value: "Slap some people!"
            },
            {
                name: "wet hug",
                value: "Hug your friends :flushed:"
            },
            {
                name: "wet smug",
                value: "You can smug. That's all."
            },
            {
                name: "wet ouranthem",
                value: "Soviet Union's anthem!"
            },
            {
                name: "wet cry",
                value: "Sadly cry..."
            },
            {
                name: "wet kiss",
                value: "Kiss your little baby :heart:"
            },
            {
                name: "wet kitsune",
                value: "Shows you a picture of a Kitsune"
            },
            {
                name: "wet pat",
                value: "Pat cute people! :flushed:"
            },
            {
                name: "wet punch",
                value: "Ouch! It hurts!"
            }
            ],
            footer: {
                text: "wetbot - 2020"
            }
        }
    })

};

module.exports.help = {
    name: "help"
}