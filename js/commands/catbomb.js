//Sends n of a random cat gif out of a selection of five gifs

//todo should probably be merged with cat commands

// module.exports = {
//     name: 'catbomb',
//     description: 'Cats!',
//     execute(message, args) {
//      var cats = ["https://media.giphy.com/media/10GxM72EtisfFS/giphy.gif", "https://media.giphy.com/media/26FPCXdkvDbKBbgOI/giphy.gif", "https://media.giphy.com/media/l41lVf2ChyKFL513q/giphy.gif", "https://media.giphy.com/media/efHwZH4DeN9ss/giphy.gif", "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"];
//      var len = cats.length;
//         console.log(len);
//      if (args <= 25) {
//      var count;
//      for(count = 0; count < args; count++){
//          var rand = Math.floor(Math.random() * len);
//          var randomCat = cats[rand];
//          console.log(rand);
//         message.channel.send(randomCat);
//    } } else {
//      message.reply('Thats an absurd amount, make it a little lower please')
//     }
//  }
//     };



//Sends a random cat gif for n amount

const Discord = require('discord.js');
const got = require('got');
const api = 'x5lDXq1A7l1774jylZpBry1K4FBRO1oD';



    module.exports = {
    name: 'catbomb',
    description: 'Cats!',
    async execute(message, args) {
        if (args <= 25) {
            var count;
            for(count = 0; count < args; count++){

                const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent("Cats")}`, {json: true})
                if (! res || !res.body || !res.body.data) return message.channel.send("Failed to find gif!", {code: "py"})

                const embed = new Discord.RichEmbed()
                .setImage(res.body.data.image_url)
                .setAuthor(message.author.tag, message.author.displayAvatarURL)

                message.channel.send({embed: embed});
         } 
            } else {
                message.reply('Thats an absurd amount, make it less than 25 please')
     }
    }
    };

