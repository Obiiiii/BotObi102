
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const wab = '🆆🅴 🅰🆁🅴 🅱🅴🅰🆁'

module.exports = {
    name: 'panda',
    aliases: [],
    category: 'animal',
    usage: "",
    description: 'Mấy con đũy gấu trúc',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // const info = fetch(`https://random-d.uk/api/random`)//https://random-d.uk/api/v2
        const info = fetch(`https://no-api-key.com/api/v1/animals/panda`)//https://random-d.uk/api/v2
            .then(res => res.json())
            // .then(json => message.channel.send(json.link)) 
            .then(json => message.channel.send({
                embed: {
                    author: {
                        name: message.author.tag,
                        icon_url: message.author.avatarURL
                    },
                    // color: 0xff0000,
                    color: '#f70f51',
                    description: `${wab}`,
                    image: {
                        url: json.image
                    },
                    footer: {
                        text: 'Powered by https://no-api-key.com',
                        icon_url: 'https://no-api-key.com/image/logo/no-api-key.png',
                    },
                }
            }))
    }
}