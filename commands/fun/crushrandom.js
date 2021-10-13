  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name : 'crush',
    aliases : [],
    category : 'fun',
    usage: "",
    description : 'tìm tình yêu của bạn',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        let person = message.guild.members.cache.filter(m => !m.user.bot && m.user.id !== message.author.id).random();
        if (!person) person = message.author;
        // message.channel.send(`**${person.displayName}** muốn xơi **${message.member.displayName}** từ lâu......`);
        // message.channel.send(` ${person.user.avatarURL({size: 2048})} \n**${message.member.displayName}** người sẽ là crush của bạn \n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n. **${person.displayName}**`);
        let avatar = person.user.displayAvatarURL({format: 'jpg', dynamic: true, size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`**${message.member.displayName}** người sẽ là crush của bạn đó chính là \n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n. **${person.displayName}**`)
        // .setImage(person.user.avatarURL({size: 2048}))
        .setImage(avatar)
        .setColor("#e30569")
        message.channel.send(embed);

    }
}