module.exports = {
    name: 'utilisateurinfo',
    description: 'Renvoie le pseudo et le tag de la personne mentionné!',
    execute(client, message, args) {
        const user_mention = message.mentions.users.first();
  message.channel.send(`Voici le tag de la personne mentionné: ${user_mention.tag}`)
    }
}