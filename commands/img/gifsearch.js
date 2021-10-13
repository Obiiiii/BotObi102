  
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name : 'gifsearch',
    aliases : ['gs'],
    category : 'img',
    usage: "<Nhập câu tìm kiếm>",
    description : 'Tìm kiếm hình ảnh gif ',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);

        const tenorAPI = 'LIVDSRZULELA'


        const info = fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=${args1}&limit=1`)
        .then(res => res.json())
        .then(json => message.channel.send(json.results[0].url))

    }
}