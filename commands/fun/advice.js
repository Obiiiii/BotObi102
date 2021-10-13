
// const { MessageEmbed } = require('discord.js');
// const Discord = require('discord.js');
// const fetch = require('node-fetch');
  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'advice',
    aliases: ['adv'],
    category: 'fun',
    usage: "",
    description: 'Cho 1 lời khuyên',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // fetch('https://api.adviceslip.com/advice')
        //     .then(res => res.json())
        //     .then(json => {
        //         const embed = new MessageEmbed()
        //             .setColor('#403B3A')
        //             .setAuthor('Advice Slip', 'https://i.imgur.com/8pIvnmD.png', 'adviceslip.com')
        //             .setDescription(json.slip.advice)
        //             .setTimestamp()
        //             .setFooter('Powered by adviceslip.com', '');
        //         message.channel.send(embed);
        //         return;
        //     })
        //     .catch(err => {
        //         message.say('Failed to deliver advice :sob:');
        //         return console.error(err);
        //     });

        const info = fetch(`https://api.adviceslip.com/advice`)
            .then(res => res.json())
            .then(json => {
                const embed = new Discord.MessageEmbed()
                    .setColor('#403B3A')
                    .setAuthor('Advice Slip','https://i.imgur.com/8pIvnmD.png','http://adviceslip.com')
                    .setDescription(json.slip.advice)
                    .setTimestamp()
                    .setFooter('Powered by adviceslip.com');
                message.channel.send(embed);
            })

    }
}