//Sends n of a random cat gif

//todo should probably be merged with cat commands


//currently only sends the first item from the array
module.exports = {
    name: 'catbomb',
    description: 'Cats!',
    execute(message, args) {
        var cats = ["https://media.giphy.com/media/10GxM72EtisfFS/giphy.gif", "https://media.giphy.com/media/26FPCXdkvDbKBbgOI/giphy.gif", "https://media.giphy.com/media/l41lVf2ChyKFL513q/giphy.gif", "https://media.giphy.com/media/efHwZH4DeN9ss/giphy.gif", "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"];
        var len = cats.length;
        console.log(len);
        if (args <= 25) {
        var count;
        for(count = 0; count < args; count++){
            var rand = Math.floor(Math.random() * len);
            var randomCat = cats[rand];
            console.log(rand);
        message.channel.send(randomCat);
   } } else {
        message.reply('Thats an absurd amount, make it a little lower please')
    }
    }
    };