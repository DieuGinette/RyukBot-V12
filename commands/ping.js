module.exports = {
    name: 'ping',
    description: 'Renvoie Pong!',
    execute(client, message, args) {
        message.channel.send("Pong!")
    }
}