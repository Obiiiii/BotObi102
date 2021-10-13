
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const axios = require('axios');

module.exports = {
    name: 'koala',
    aliases: [],
    category: 'animal',
    usage: "",
    description: 'Mấy con bé Koala',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        try {
            const response = await axios.get('https://some-random-api.ml/img/koala');
                const embed = new MessageEmbed()
                    .setTitle(`Koalaaaa`)
                    .setURL(response.data.link)
                    .setImage(response.data.link);
                message.channel.send(embed);
        }
        catch(e) {
            console.log(e);
            return message.channel.send('Bot lỗi, vui lòng thử lại sau!');
        }
    }
}