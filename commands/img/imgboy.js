  
const { MessageEmbed, MessageAttachment } = require('discord.js')
const { readdirSync, readFileSync } = require('fs');
module.exports = {
    name : 'boy',
    aliases: ['b'],
    category : 'img',
    description : 'cho ra ảnh của trai',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const folder = readdirSync("././assets/trai");
        const randomFile = folder[Math.floor(Math.random() * folder.length)];
        const file = readFileSync(`././assets/trai/${randomFile}`);
        const ext = randomFile.slice(-3);
        const attachment = new MessageAttachment(file, `traidep.${ext}`);
        const embed = new MessageEmbed()
            .attachFiles(attachment)
            .setImage(`attachment://traidep.${ext}`)
            .setFooter('Nguồn: @ngamtraiA');
        message.channel.send(embed);

    }
}