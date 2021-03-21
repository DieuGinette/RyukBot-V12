const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('message', message => {
if (message.content.startsWith(`${PREFIX}ping`)) message.channel.send("Pong!")
});

client.login(TOKEN);