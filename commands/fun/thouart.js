const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'thoart',
    aliases: [],
    category: 'fun',
    usage: "<@tag>",
    description: 'Chưởi 1 ai đó',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // const member = this.getMemberFromMention(message, args[0]) ||
        //     message.guild.members.cache.get(args[0]) ||
        //     message.member;

        let member = message.mentions.users.first() || message.author

        try {
            const res = await fetch('http://quandyfactory.com/insult/json/');
            let insult = (await res.json()).insult;
            insult = insult.charAt(0).toLowerCase() + insult.slice(1);
            const embed = new MessageEmbed()
                .setTitle('🎭  Thou Art  🎭')
                .setDescription(`${member.username}, ${insult}`)
                .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor(message.guild.me.displayHexColor);
            message.channel.send(embed);
        } catch (err) {
            message.client.logger.error(err.stack);
            this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
        }

    }
}