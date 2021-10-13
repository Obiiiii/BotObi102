  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const array = require('../../assets/json/thinh.json').data;

module.exports = {
    name : 'thinh',
    aliases : [],
    category : 'fun',
    usage: "",
    description : 'Những câu thính chất lượng',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const random = array[Math.floor(Math.random() * array.length)];
        message.channel.send(random);


    }
}