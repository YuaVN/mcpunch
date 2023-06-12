const client = require("../bot");
const { Collection } = require("discord.js")
const fs = require("fs")
const Discord = require("discord.js");
const shell = require('shelljs');

global.attack_1 = 0;
global.attack_2 = 0;

client.on("ready", () => {
	console.log(`${client.user.tag} Bot Online!`)
	client.user.setActivity('MCBOT ON TOP!')

	setInterval(() => {
		var exec = require('child_process').exec
			exec(`python3 main.py`, (error, stdout, stderr) => {
		});
		shell.exec(`cd /root/MCATTACK/machines && ./dedv1.sh proxies`)
		shell.exec(`cd /root/MCATTACK/machines && ./dedv2.sh proxies`)
		shell.exec(`cd /root/MCATTACK/machines && ./dedv3.sh proxies`)
		
	}, 300 * 1000);

	client.commands = new Collection();
	client.aliases = new Collection();
	fs.readdir("./attacks/", (err, files) => {
		if (err) console.error(err);

	files.forEach(f => {
		let props = require(`../attacks/${f}`);
    
		console.log(`Đã tải ${props.help.name}!`);

			client.commands.set(props.help.name, props);
			props.conf.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
			});
		});
	});
});
