const Discord = require ("discord.js");
const config = require('./config.json');
const bot = new Discord.Client();
const fs = require("fs");

const talkedRecently = new Set();

var prefix = config.prefix;

bot.login(config.token);

bot.commands = new Discord.Collection();

    bot.on("guildMemberAdd", member => {

        const channel = member.guild.channels.cache.find(channel => channel.id === config.channelid);
        const channele = member.guild.channels.cache.find(channel => channel.id === config.channeleid);
        if(!channel) return;
        if(!channele) return;
    
        channel.send(`Welcome to **${member.guild.name}**, **${member}** and have fun!`);
        channele.send(`Welcome to **${member.guild.name}**, **${member}** and have fun!`);

        var role = member.guild.roles.cache.find(role => role.name === 'Guests');
        var roles = member.guild.roles.cache.find(role => role.name === 'wooden hoe');
        if(member.guild.id === "729657760014270535") {
            member.roles.add(role);
            console.log(`Role ${role.name} given to ${member.name} on ${member.guild.name}`);
        }else if(member.guild.id === "715012510083973120"){
        member.roles.add(roles)
        console.log(`Role ${role} given to ${member} on ${member.guild.name}`);
        }
    })

fs.readdir("./commands/", (error, f) => {
    if(error) console.log(error);

    let commands = f.filter(f => f.split(".").pop() === "js");
    if(commands.length <= 0) return console.log("No command found.")

    commands.forEach((f) => {

        let command = require(`./commands/${f}`);
        console.log(`${f} has been loaded.`);

    bot.commands.set(command.help.name, command);
    });
});

fs.readdir("./events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events loading.`);

    f.forEach((f) => {
        const events = require(`./events/${f}`);
        const event = f.split(".")[0]

    bot.on(event, events.bind(null, bot));
    });
});