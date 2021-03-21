const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('message', message => {
if (message.content.startsWith(`${PREFIX}ping`)) message.channel.send("Pong!")
if (message.content.startsWith(`${PREFIX}serveur`)) message.channel.send("Pong!")
if (message.content.startsWith(`${PREFIX}utilisateur`)) message.channel.send("Pong!")
});

client.login(TOKEN);