
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: 'gifpornhub',
    aliases: ['gp'],
    category: 'img',
    usage: "<boobs>",
    description: 'Lệnh không hoạt động do sài nhà mạng VN \n Lấy ảnh gif từ pornhub VD: Pussy, tits, ass, boobs, blow job',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.channel.send("Lệnh này chỉ sử dụng được ở channel có bật mode NSFW!");
        else {
            const Pornsearch = require('pornsearch');

            const bargs = message.content.split(' ');
            const searchString = bargs.slice(1).join(' ')

            if (!searchString) return message.reply('Nigga nhập từ khóa tìm kiếm vào!!!!!')


            // const Pornsearch = require('pornsearch');
            const Searcher = new Pornsearch(searchString);
            const s = Math.floor(Math.random() * 20) + 1;
            const s1 = Math.floor(Math.random() * 10) + 1;

            Searcher.gifs(s1)
                // .then(gifs => console.log(gifs.map(gif => gif.url)))
                .then(gifs => message.channel.send({
                    embed: {
                        color: 0xff0000,
                        description: `**GIF ${gifs[s].title}**`,
                        image: {
                            url: gifs[s].url
                        },

                    }
                }))

            Searcher.videos(s1)
                .then(videos => message.channel.send({
                    embed: {
                        author: {
                            name: message.author.tag,
                            icon_url: message.author.avatarURL
                        },
                        color: 0xff0000,
                        // title: `*Video* `+ videos[1].title,
                        description: videos[s].url,
                        image: {
                            url: videos[s].thumb
                        }
                    }
                }))

        }
    }
}