
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const request = require('node-superfetch');
const wab = '🆆🅴 🅰🆁🅴 🅱🅴🅰🆁'

module.exports = {
    name: 'birds',
    aliases: [],
    category: 'animal',
    usage: "",
    description: 'Mấy con đũy chim 7 màu',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
		try {
			const { body } = await request
				.get('https://shibe.online/api/birds')
				.query({
					count: 1,
					urls: true,
					httpsUrls: true
				});
			return message.channel.send({ files: [body[0]] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
    }
}