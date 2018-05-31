//Sends 10 of the cat gif

//todo allow the user to decide how many of the gif it sends 
//also should probably be merged with cat commands

module.exports = {
    name: 'catbomb',
    description: 'Cats!',
    execute(message, args) {
    	var count;
    	for(count = 0; count < 10; count++){
        message.channel.send('https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif');
    }
    },
};

