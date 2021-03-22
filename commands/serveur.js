module.exports = {
    name: 'serveur',
    description: 'Renvoie le nom du serveur depuis lequel l\'utilisateur tape la commande!',
    execute(message, args) {
        message.channel.send(`Tu es actuellement sur le serveur ${message.guild.name}`);
    }
}