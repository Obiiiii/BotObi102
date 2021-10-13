
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const path = require('path');
const { join } = require('path');
const { centerImage } = require('../../util/Canvas');
const { getMember } = require('../../functions/utils');


const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'simp',
    aliases: [],
    category: 'editimg',
    usage: "<@tag>",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // let attachments = message.attachments.array();

        // if (attachments.length === 0) return message.reply("Please upload some images!");

        // else if (attachments.length > 1) return message.reply("I only can process one image at one time!");

        const member = await getMember(message, args.join(' '), false);
        if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');
        // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));1024
        const avv = member.user.displayAvatarURL({ format: 'jpg', size: 1024 });
        // message.channel.send(avv)


        try {
            const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'imgedit', 'simp.jpg'));
            const { body } = await request.get(avv);
            const data = await loadImage(body);
            const canvas = createCanvas(data.width, data.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(data, 0, 0);
            const { x, y, width, height } = centerImage(base, data);
            ctx.drawImage(base, x, y, width, height);
            const attachment = canvas.toBuffer();
            if (Buffer.byteLength(attachment) > 8e+6) return message.reply('Resulting image was above 8 MB.');
            return message.channel.send({ files: [{ attachment, name: 'simp.jpg' }] });
        } catch (err) {
            return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        }


    }
}