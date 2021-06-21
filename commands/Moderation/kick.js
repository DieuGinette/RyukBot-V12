const { MessageEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas !");

    const embed = new MessageEmbed()
    .setAuthor(`${user.id}`)
    .setTitle('Un membre viens d\'être kick')
    .setDescription(`Le membre **${user.username}** a été kick avec succès.`)
    .setThumbnail(user.avatarURL())
    .addField('Par', message.member, true)
    .addField('Membre', user.username, true)
    .addField('Raison', reason)
    .setFooter("RyukBot", message.author.avatarURL())
    .setTimestamp()
    .setColor("#2f3136");

    const log_channel = client.channels.cache.get('843055488534315019').send(embed);
};

module.exports.help = {
    name: "kick",
    aliases: ['kick'],
    description: "Kick un utilisateur du serveur !",
    cooldown: 10,
    usage: '<votre_message>',
    isUserAdmin: true,
    permissions: true,
    args: true
};