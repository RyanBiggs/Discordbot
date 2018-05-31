//Sends a little gif of a cat 


module.exports = {
    name: 'cat',
    description: 'Cats!',
    execute(message, args) {
        message.channel.send('https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif');
    },
};