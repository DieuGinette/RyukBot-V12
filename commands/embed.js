const { MessageEmbed, User } = require("discord.js");

module.exports = {
    name: 'embed',
    description: 'Renvoie un embed!',
    execute(client, message, args) {
       const embed = new MessageEmbed()
       .setColor("#dc143c")
       .setTitle("Titre")
       .setThumbnail(client.user.displayAvatarURL())
       .setURL("https://www.nathanblanchet.fr/")
       .setDescription("La description")
       .setImage(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter("Je suis sur le pied de l\'embed");

       message.channel.send(embed); 

    }
} 