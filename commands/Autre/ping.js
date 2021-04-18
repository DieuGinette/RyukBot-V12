module.exports.run = (client, message, args) => {
    message.channel.send("Pong !");
}

module.exports.help = {
    name: "ping",
    description: "Renvoie Pong !",
    cooldown: 10,
    args: false
};