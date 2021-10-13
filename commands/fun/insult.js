  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name : 'insult',
    aliases : ['0'],
    category : 'fun',
    usage: "<vi>",
    description : 'Nhờ BOT chửi hộ (có hổ trợ nhiều ngôn ngữ nhưng ko dc nhiều câu toxic)',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // const lang = message.content.slice(prefix.length).trim().split(' ');
        // const lang123 = lang[1]
        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);
    
        // const info = fetch(`https://evilinsult.com/generate_insult.php?lang=en&type=json`)
        const info = fetch(`https://evilinsult.com/generate_insult.php?lang=${args1}&type=json`)
        .then(res => res.json())
        .then(json => {
          const embed = new Discord.MessageEmbed()
            .setColor('#E41032')
            .setAuthor('Chửi chết mẹ mày', 'https://i.imgur.com/bOVpNAX.png')
            .setDescription(json.insult)
            .setTimestamp()
            .setFooter('Powered by evilinsult.com', '');
            message.channel.send(embed);
        })


    }
}