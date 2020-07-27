const Discord = require("discord.js");
const { get } = require("https");

module.exports.run = async(bot, message, args) => {
    if(!message.mentions.members.first()){

                message.channel.send({
                    embed: {
                        color: 0xe61616,
                        title: `${message.author.username} has asked for their pfp!`,

                        image: {
                            url: message.author.displayAvatarURL()
                        },
                        footer: {
                            text: `${bot.user.username}`
                        }
                    }
                });

}else{
    const member = message.mentions.users.first() || message.member

                message.channel.send({
                    embed: {
                        color: 0xe61616,
                        title: `${message.author.username} has asked for ${member.username}'s pfp!`,

                        image: {
                            url: member.displayAvatarURL()
                        },
                        footer: {
                            text: `${bot.user.username}`
                        }
                    }
                });
}

}

module.exports.help = {
    name: "pfp"
}
