const Discord = require('discord.js');
const got = require('got');
const api = 'x5lDXq1A7l1774jylZpBry1K4FBRO1oD';

module.exports = {
    name: 'gif',
    description: 'Finds gif',
    async execute(message, args) {
    	const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
    	if (! res || !res.body || !res.body.data) return message.channel.send("Failed to find gif!", {code: "py"})

    	const embed = new Discord.RichEmbed()
    	.setImage(res.body.data.image_url)
    	.setAuthor(message.author.tag, message.author.displayAvatarURL)

    	message.channel.send({embed: embed});

	}
    };