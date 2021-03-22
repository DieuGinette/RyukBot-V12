module.exports = {
    name: 'ping',
    description: 'Renvoie Pong!',
    execute(message, args) {
        message.channel.send("Pong!")
    }
}