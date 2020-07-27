const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const member = message.mentions.members.first() || message.member

    if(member.user.id === "613794189842579475"){
        message.channel.send(`Don't worry ${member}, your IQ is over 9000!`)
    }else if(member.user.id === "704843068637184040"){
        message.channel.send(`Don't worry ${member}, your IQ is over 9000!`)
    }else if(member.user.id === "235744457264332800"){
        message.channel.send(`Don't worry ${member}, your IQ is over 9000!`)
    }else if(member.user.id === "719453489629233162"){
        message.channel.send(`Don't worry ${member}, your IQ is over 9000!`)
    }else if(member.user.id === "621757961596960769"){
        message.channel.send(`Don't worry ${member}, your IQ is over 9000!`)
    }else if(member.user.id === "402215756613419018"){
        message.channel.send(`Don't worry ${member}, your IQ is over 9000!`)
    }else{
        message.channel.send(`Sorry ${member}, your IQ is below 100..`)
    }
}

module.exports.help = {
    name: "youriq"
}