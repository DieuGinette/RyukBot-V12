module.exports = {
    name: 'utilisateur',
    description: 'Renvoie le pseudo ainsi que le tag de la personne qui a executé la commande!',
    execute(client, message, args) {
        message.channel.send(`Tu es l'utilisateur ${message.author.tag}`);
    }
}