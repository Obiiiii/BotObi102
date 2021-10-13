  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
apiipkey = config.apiipkey;
myip = config.myip;
const publicIP = require('public-ip');
// const ipgeolocation = process.env.IPGEOLOCATION;
const axios = require('axios');
// const { getPing } = require('../../functions/economy');

module.exports = {
    name : 'test1',
    aliases : ['p'],
    category : 'info',
    usage: "<@tag>",
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        var size = 30
        var value = 100
        var maxValue = 100

        // message.channel.send('123'+ a3)


        const percentage = value / maxValue; // Calculate the percentage of the bar
        const progress = Math.round((size * percentage)); // Calculate the number of square caracters to fill the progress side.
        const emptyProgress = size - progress; // Calculate the number of dash caracters to fill the empty progress side.

        const progressText = '▇'.repeat(progress); // Repeat is creating a string with progress * caracters in it
        const emptyProgressText = '—'.repeat(emptyProgress); // Repeat is creating a string with empty progress * caracters in it
        const percentageText = Math.round(percentage * 100) + '%'; // Displaying the percentage of the bar
      
        // const bar = '```[' + progressText + emptyProgressText + ']' + percentageText + '```'; // Creating the bar
        const bar = '```[' + progressText + emptyProgressText + ']' + percentageText + '```'; // Creating the bar

        message.channel.send('123'+ bar)

    }
}