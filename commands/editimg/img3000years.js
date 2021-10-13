  
const { MessageEmbed } = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const Canvas = require('canvas');
const request = require('node-superfetch');
const path = require('path');
const { centerImagePart } = require('../../util/Canvas');

module.exports = {
    name : 'img3000year',
    aliases : ['i3'],
    category : 'editimg',
    usage: "<add hình>",
    description : 'Chỉnh sửa ảnh',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // let member = message.mentions.users.first() || message.author
        // // const avatar = await canvas.loadImage(member.displayAvatarURL({ format: 'jpg', size: 128 }));
        // let attachments = member.displayAvatarURL({ format: 'jpg', size: 128 })
        // const avatar = await Canvas.loadImage(attachments);
        // console.log(avatar)



        let attachments = message.attachments.array();

        if (attachments.length === 0) return message.reply("Please upload some images!");
    
        else if (attachments.length > 1) return message.reply("I only can process one image at one time!");
        

        try {
            message.channel.startTyping(true); // More look like a "notsobot" :)
            const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'imgedit', '3000-years.png'));
            
            const {body} = await request.get(attachments[0].url);

            const data = await loadImage(body);
			// const { body } = await request.get(image);
			// const data = await loadImage(body);
			const canvas = createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			const { x, y, width, height } = centerImagePart(data, 200, 200, 461, 127);
            ctx.drawImage(data, x, y, width, height);
            message.channel.stopTyping(true);
            return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: '3000-years.png' }] });
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}

    }
}