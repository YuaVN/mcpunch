const https = require('https');
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = message.content.split (" ")[1]
const ip = host?.split(":")[0]
const ports = host?.split(":")[1]
const port = (ports || '25565');
const config = require('../config.json');
var primary_room = config.commandroom;
var secondary_room = config.secondary_commandroom;

if (message.channel.id != primary_room && message.channel.id != secondary_room) {
	return;
  }

if(!args[0]) {
   message.channel.send('Vui lòng điền địa chỉ máy chủ!');
   message.react('❌');
   return;
}

const embed1 = new Discord.MessageEmbed()
	.setColor('#F1C40F')
	.setDescription("```ĐANG LẤY THÔNG TIN MÁY CHỦ```")

	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif")
message.channel.send({embeds : [embed1]});

var exec = require('child_process').exec
	exec(`python3 tcp.py ${ip} -port ${port} -num 4`, (error, stdout, stderr) => {
	const embed = new Discord.MessageEmbed()
				.setColor('#2ECC71')
				.setTitle("MCBOT V1.0")
				.setDescription("```" + stdout + "```")
	message.channel.send({embeds : [embed]});
    });
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ping'],
    permLevel: 0
  }
  
  exports.help = {
    name: 'ping',
    description: 'ping',
    usage: 'ping'
  }