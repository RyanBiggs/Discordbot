/*Show the avatar of the user that gave the commands, they should be able to mention another user to show their avatar but
i'm having a hard time trying to figure out why that wont work*/


module.exports = {
    name: 'avatar',
    description: 'Show Avatar!',
    execute(message, args) {
       if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });
    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    },
};