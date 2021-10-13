  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name : 'cat',
    aliases : [],
    category : 'animal',
    usage: "",
    description : 'Ném ra những con mèo mất dại',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
   
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        message.channel.send(file);

    }
}