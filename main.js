const fs = require("fs");
const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('message', message => {
if (!message.content.startsWith(PREFIX) || message.author.bot) return;
const args = message.content.slice(PREFIX.length).split(/ +/);
const command = args.shift().toLowerCase();

if (command === 'ping') message.channel.send("Pong!")
if (command === 'serveur') message.channel.send(`Tu es actuellement sur le serveur ${message.guild.name}`);
if (command === 'utilisateur') message.channel.send(`Tu es l'utilisateur ${message.author.tag}`);
if (command === 'utilisateurinfo') {
  const user_mention = message.mentions.users.first();
  message.channel.send(`Voici le tag de la personne mentionné: ${user_mention.tag}`)
}
});

client.login(TOKEN);