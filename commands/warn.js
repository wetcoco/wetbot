const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (message.author.bot) return;
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        var reason = message.content.split(' ').slice(2).join(' ');
            let role = message.member.hasPermission("KICK_MEMBERS")
              if (!message.member.hasPermission("KICK_MEMBERS"))
                return message.channel.send(":no_entry: You can't do that! Come on!");
              if (!user)
              return message.channel.send("Who is the guy you wanna warn?");
              if (!reason)
              return message.channel.send(`Why are you gonna warn ${user.username}?`)
              message.channel.send(`**@${user.tag}** you got warned by **@${message.author.tag}** for **${reason}**.`);
              message.channel.send(`**@${user.tag}** got warned by **@${message.author.tag}** for **${reason}**.`)
};

module.exports.help = {
    name: "warn"
}