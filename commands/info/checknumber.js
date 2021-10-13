const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
// const fetch = require('node-fetch');

module.exports = {
    name: 'checknumber',
    aliases: ['cn'],
    category: 'info',
    usage: "<Number> <Mã Vùng>",
    description: 'Kiểm tra thông tin số điện thoại',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        const key = '89f8fc740869c5f06182ee9db3b9076a'
        const type = message.content.slice(prefix.length).trim().split(' ');
        const number = type[1];
        const con = type[2];
        message.channel.send(number)
        // const ss3 = type[3];

        // const con = `+84`;
        // if (!number) {
        //     ''

        // }
        // if (!con) {
        //     ''

        // }

        const info = fetch(`http://apilayer.net/api/validate?access_key=${key}&number=${number}&country_code=${con}&format=1`)
        // const info = fetch(`http://apilayer.net/api/validate?access_key=${key}&number=${number}&country_code=VN&format=1`)
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
                    description: `Đất nước ${json.country_name}`,
                    fields: [
                        {
                            name: 'Hợp lệ hay không (True = hợp lệ , False = Không hợp lệ)',
                            value: `${json.valid}.`,
                        },
                        // {
                        //     name: '\u200b',
                        //     value: '\u200b',
                        //     inline: false,
                        // },
                        {
                            name: 'Số điện thoại tại khu vực',
                            value: `${json.local_format}.`,
                            inline: false,
                        },
                        {
                            name: 'Số điện thoại trên toàn cầu',
                            value: `${json.international_format}.`,
                            inline: false,
                        },
                        {
                            name: 'Đơn vị',
                            value: `${json.carrier}.`,
                            inline: false,
                        },
                        {
                            name: 'Bằng phương tiện',
                            value: `${json.line_type}.`,
                            inline: false,
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Powered by https://numverify.com/',
                        icon_url: 'https://numverify.com/images/logos/numverify_header.png',
                    },
                }
            }))

    }
}