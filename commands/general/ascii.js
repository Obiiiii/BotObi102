  
const { MessageEmbed } = require('discord.js');
const figlet = require('figlet');
module.exports = {
    name : 'ascii',
    aliases : ['as'],
    category : 'fun',
    usage: "<Câu muốn chuyển đổi>",
    description : 'Chuyển đổi chử',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        if(!args[0]) return message.channel.send('Please provide some text');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')

            message.channel.send('```' + data + '```')
        })

    }
}