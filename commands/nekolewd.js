const Discord = require("discord.js");
const { get } = require("https");

module.exports.run = async(bot, message, args) => {

    if(!message.channel.nsfw) {
        return message.channel.send("It's not an NSFW room!")
    }

    get("https://neko-love.xyz/api/v1/nekolewd", (res) => {
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
                        image: {
                            url: parsedData.url
                        },
                        footer: {
                            text: `${bot.user.username}`
                        }
                    }
                });

                console.log(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
            }).on("error", (err) => {
                console.error(err.message);
            });
}

module.exports.help = {
    name: "nekolewd"
}