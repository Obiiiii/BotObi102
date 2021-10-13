  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const { desaturate, contrast } = require('../../util/Canvas');

module.exports = {
    name : 'deeptry',
    aliases : ['dt'],
    category : 'editimg',
    usage: "<Cho hình vào>",
    description : 'Chỉnh sửa hình ảnh',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        let attachments = message.attachments.array();

        if (attachments.length === 0) return message.reply("Please upload some images!");
    
        else if (attachments.length > 1) return message.reply("I only can process one image at one time!");
        

        try {
            message.channel.startTyping(true); // More look like a "notsobot" :)
            const {body} = await request.get(attachments[0].url);

            const data = await loadImage(body);


			// const { body } = await request.get(image);
			// const data = await loadImage(body);
			const canvas = createCanvas(data.width, data.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(data, 0, 0);
			desaturate(ctx, -20, 0, 0, data.width, data.height);
			contrast(ctx, 0, 0, data.width, data.height);
			const attachment = canvas.toBuffer('image/jpeg', { quality: 0.2 });
            if (Buffer.byteLength(attachment) > 8e+6) return msg.reply('Resulting image was above 8 MB.');
            message.channel.stopTyping(true);
            return message.channel.send({ files: [{ attachment, name: 'deep-fry.jpeg' }] });
            
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        }
        

    }
}