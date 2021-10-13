  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const request = require('node-superfetch');
const config = require("../../config.json");
prefix = config.prefix;

module.exports = {
    name : 'duck',
    aliases : [],
    category : 'animal',
    usage: "",
    description : 'Nhứng chú vịt xinh đẹp',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // try {
        //     const info = fetch(`https://random-d.uk/api/random`)
        //     .then(res => res.json())
        //     .then(json => message.channel.send(`Powered by https://random-d.uk/ \n`+json.url))
		// } catch (err) {
		// 	if (err.status === 404) return message.channel.send('Could not find any results.');
		// 	return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        // }
        
        // const info = fetch(`https://random-d.uk/api/random`)//https://random-d.uk/api/v2
        const info = fetch(`https://random-d.uk/api/v2/random`)//https://random-d.uk/api/v2
        .then(res => res.json())
        // .then(json => message.channel.send(json.link)) 
        .then(json => message.channel.send({embed:{
            author: {
                name: message.author.tag,
                icon_url: message.author.avatarURL
            },
            // color: 0xff0000,
            color: '#f70f51',
            description: 'Duck Duck every where',
            image: {
                url: json.url
            },
            footer: {
                text: 'Powered by https://random-d.uk/',
                icon_url: 'https://random-d.uk/static/favicon.png',
            },
        }}))

    }
}