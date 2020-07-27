const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(bot, message, args) => {

    const member = message.mentions.members.first() || message.member

    message.channel.send({
        embed: {
            color: 0xe61616,
            title: `**${member.user.username}\'s** statistics`,
            thumbnail: {
                url: member.user.displayAvatarURL
            },
            fields: [
            {
                name: "User ID",
                value: member.id
            },
            {
                name: "User joined Discord at",
                value: moment.utc(member.user.createdAt).format("LL")
            },
            {
                name: "The user is playing",
                value: `${member.user.presence.game ? `${member.user.presence.game.name}` : "No game"}`
            },
            {
                name: "Joined the server at",
                value: moment.utc(member.joinedAt).format("LL")
            }
            ],
            footer: {
                text: "wetbot - 2020"
            }
        }
    })

};

module.exports.help = {
    name: "stats"
}