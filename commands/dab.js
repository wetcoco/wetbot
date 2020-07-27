const Discord = require("discord.js");
const { get } = require("https");

module.exports.run = async(bot, message, args) => {
    if(!message.mentions.members.first()){

    get("https://neko-love.xyz/api/v1/hahaha", (res) => {
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

                message.channel.send(`**${message.author.username}** has dabbed!`);
                message.channel.send("https://tenor.com/view/hulk-dab-hulk-dab-endgame-avengers-gif-14708830");

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

    get("https://neko-love.xyz/api/v1/hahaha", (res) => {
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

                message.channel.send(`**${message.author.username}** has dabbed on **${member.user.username}**!`);
                message.channel.send("https://tenor.com/view/hulk-dab-hulk-dab-endgame-avengers-gif-14708830");

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
    name: "dab"
}
