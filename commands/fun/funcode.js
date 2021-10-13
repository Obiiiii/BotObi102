const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'funcode',
    aliases: [],
    category: 'funcode',
    usage: "",
    description: 'test fun code',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        message.channel.send(`Người yêu bạn tên Gì`)


    }
}