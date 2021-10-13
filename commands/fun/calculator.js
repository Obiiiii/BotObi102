  
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name : 'calculator',
    aliases : ['cal'],
    category : 'fun',
    usage: "<5> + <5>",
    description : 'Lấy ra Casio 8 tỷ',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
 
        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#dbb107')
        .setTitle('Casio 8 Tỷ')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}