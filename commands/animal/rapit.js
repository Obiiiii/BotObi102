
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'rabbit',
    aliases: ['bunny'],
    category: 'animal',
    usage: "<@tag>",
    description: 'Mấy em thỏ dễ thương',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        try {
            const { body } = await fetch
                .get('https://api.bunnies.io/v2/loop/random/')
                .query({ media: 'gif,png' });
            let fileToSend;
            let fileType = 'gif';
            const gif = await fetch.get(body.media.gif);
            if (Buffer.byteLength(gif.body) > 8e+6) {
                const poster = await fetch.get(body.media.poster);
                fileToSend = poster.body;
                fileType = 'png';
            } else {
                fileToSend = gif.body;
            }
            return message.channel.send({ files: [{ attachment: fileToSend, name: `${body.id}.${fileType}` }] });
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        }
    }
}