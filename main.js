const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODIyNTYxMzU2NzgzOTQzNzIx.YFUD9Q.Ry_vYDYjG-j5Sr1HMKOXyJGhzYY');