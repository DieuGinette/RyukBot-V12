const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dice.png');
const randomDice = () => Math.floor(Math.random() * 6) +1;

module.exports = {
    name: 'dé',
    description: 'Renvoie la valeur de plusieurs dés',
    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setColor("#d54e12")
        .setTitle("Lancer de plusieurs dés")
        .attachFiles(diceImg)
        .setThumbnail('attachment://dice.png')
        .addFields(
            { name: 'Dé #1', value: randomDice(), inline: true },
            { name: 'Dé #2', value: randomDice(), inline: true },
            { name: 'Dé #3', value: randomDice(), inline: true },
        )
         .addFields(
            { name: 'Dé #4', value: randomDice(), inline: true },
            { name: 'Dé #5', value: randomDice(), inline: true },
            { name: 'Dé #6', value: randomDice(), inline: true },
         );
         message.channel.send(embed);
    }
}