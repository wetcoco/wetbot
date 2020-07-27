const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {

    const member = message.mentions.members.first() || message.member

    message.channel.send("@everyone");
    message.channel.send({
        embed: {
            color: 0xe61616,
            title: `***___The bot updated___***`,
            thumbnail: {
                url: member.user.displayAvatarURL
            },
            fields: [
            {
                name: "The bot now has ***___more commands___***!",
                value: "Like ;kiss or ;hug!"
            },
            {
                name: "Don't forgot bot is made by ***___wetcoco___***!",
                value: "With all her love for discord bots!"
            }
            ],
            footer: {
                text: "wetbot - 2020"
            }
        }
    })

};

module.exports.help = {
    name: "epixcommandlolxd"
}