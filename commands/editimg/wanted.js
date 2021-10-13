  

const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');
const { join } = require('path');
const { getMember } = require('../../functions/utils');

module.exports = {
    name : 'wanted',
    aliases : [],
    category : 'editimg',
    usage: "<@tag>",
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        try {
            let member1 = message.mentions.users.first() || message.author
    
            const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', 'wanted.jpg'));
            const canvas = Canvas.createCanvas(background.width, background.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(background, 0, 0);
            const member = await getMember(message, args.join(' '), false);
            if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');
            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));
            ctx.drawImage(avatar, 140, 350, 440, 440);
            const buffer = canvas.toBuffer();
            const attachment = new MessageAttachment(buffer);
            // return message.channel.send(`|| Còn gà lắm ${member1.username}||`, attachment);
            return message.channel.send(attachment);
			// return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'wanted.jpg' }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}


    }
}