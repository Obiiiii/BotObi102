  
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'avatar',
    aliases : ['av'],
    category : 'info',
    usage: "<@tag>",
    description : 'Show avatar 1 ai đó',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({format: 'jpg', dynamic: true, size: 1024})


        const embed = new MessageEmbed()
        .setTitle(`**Link**`)
        .setURL(avatar)
        .setAuthor(`${member.username}'s avatar`, member.displayAvatarURL({format: 'jpg', dynamic: true}))
        .setImage(avatar)
        .setColor("#e30569")
        message.channel.send(embed);

    }
}