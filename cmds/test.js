const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
message.channel.send('> бот работает');
};
module.exports.help = {
    name: "test"
};