const Discord = require("discord.js");


exports.run = async (client, message, args) => {
const config = require('../config.json');
var room = config.commandroom;
var secondary_room = config.secondary_commandroom;
	if (message.channel.id != room && message.channel.id != secondary_room) {
		return;
	}
	message.reply("```PHƯƠNG PHÁP TẤN CÔNG:\n\nJoin (1.8.X - 1.19.3)\nMotd (1.8.X - 1.19.3)\nJoinMotd (1.8.X - 1.19.3)\nNullPing (1.8.X - 1.19.3)\nRandom (1.8.X - 1.19.3)\nBypass (1.8.X - 1.19.3)\nName (1.8.X - 1.19.3)\nPrefix (1.8.X - 1.19.3)```");
}

exports.conf = {
  aliases: []
};

exports.help = {
  name: "methods"
};