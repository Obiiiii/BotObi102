
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;

module.exports = {
    name: 'lookup',
    aliases: [],
    category: 'info',
    usage: "<Tên miền> | <IP>",
    description: 'Phân giải địa chỉ IP hoặc tên máy chủ với thông tin bổ sung',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);
        const resl = messageArray;

        try {
            var res = await fetch(`http://ip-api.com/json/${args1}`); // fetch json data from ip-api.com

            // json results
            const json = await res.json();
            function embedResolve() {
                //embed json results
                return new MessageEmbed()
                    .setColor('#42aaf5')
                    .setAuthor(
                        'IP/Hostname Resolver',
                        'https://i.imgur.com/3lIiIv9.png',
                        'https://ip-api.com'
                    )
                    .addFields(
                        { name: 'Query', value: resl, inline: true },
                        { name: 'Resolves', value: json.query, inline: true },
                        { name: '‎', value: '‎', inline: true },
                        {
                            name: 'Location',
                            value: `${json.city}, ${json.zip}, ${json.regionName}, ${json.country}`,
                            inline: false
                        },
                        { name: 'ORG', value: `${json.org}‎`, inline: true }, // organisation who own the ip
                        { name: 'ISP', value: json.isp, inline: true }, // internet service provider
                        { name: 'OBO', value: json.as, inline: false }
                    )
                    .setTimestamp(); //img here
            }
            message.channel.send(embedResolve(json.isp));
        } catch (e) {
            console.error(e);
            message.say(
                'Something went wrong looking for that result, is the api throttled?'
            );
            return;
        }


    }
}