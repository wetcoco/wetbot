const Discord = require("discord.js");
const { get } = require("https");

module.exports.run = async(bot, message, args) => {
    if(!message.mentions.members.first()){

    get("https://neko-love.xyz/api/v1/itisgreate", (res) => {
        const { statusCode } = res;
        if (statusCode != 200) {
        res.resume;
        }
        res.setEncoding("utf8");
        let rawData = '';
        res.on("data", (chunk) => {
            rawData += chunk;
        });
        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);

                message.channel.send({
                    embed: {
                        color: 0xe61616,
                        title: `${message.author.username} suicided...`,

                        //image: {
                         //   url: "https://tenor.com/view/anime-whatever-eye-roll-gif-14086660"
                        //},
                        //footer: {
                          //  text: `${bot.user.username}`
                        //}
                    }
                });

                message.channel.send("https://tenor.com/view/finger-gun-barney-himym-nph-neil-patrick-harris-gif-4524247");
                message.channel.send({
                    embed: {
                        color: 0xe61616,
                        footer: {
                            text: `${bot.user.username}`
                        }
                    }
                })

                console.log(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
            }).on("error", (err) => {
                console.error(err.message);
            });
}else{
    const member = message.mentions.members.first() || message.member

    get("https://neko-love.xyz/api/v1/itisgreate", (res) => {
        const { statusCode } = res;
        if (statusCode != 200) {
        res.resume;
        }
        res.setEncoding("utf8");
        let rawData = '';
        res.on("data", (chunk) => {
            rawData += chunk;
        });
        res.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);

                message.channel.send({
                    embed: {
                        color: 0xe61616,
                        title: `${message.author.username} killed ${member.user.username}.`,
                        ///fields: [
                          //  {
                            //    name: "https://i.imgur.com/3xvcCjC.gif",
                            //},
                        //],

                        //image: {
                        //    url: "https://i.imgur.com/3xvcCjC.gif",
                        //},
                        //footer: {
                          //  text: `${bot.user.username}`,
                        
                        //}
                    }
                });

                message.channel.send("https://tenor.com/view/shoot-shot-gun-gif-8473623");
                message.channel.send({
                    embed: {
                        color: 0xe61616,
                        footer: {
                            text: `${bot.user.username}`
                        }
                    }
                })

                console.log(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
            }).on("error", (err) => {
                console.error(err.message);
            });
}

}

module.exports.help = {
    name: "kill"
}
