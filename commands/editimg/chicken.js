
const Canvas = require('canvas');
const { MessageAttachment } = require('discord.js');
const { join } = require('path');
const { getMember } = require('../../functions/utils');


  
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name : 'chicken',
    aliases : ['ck'],
    category : 'editimg',
    usage: "<@tag>",
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        let member1 = message.mentions.users.first() || message.author
        
        // const canvas = Canvas.createCanvas(1000, 500);
        // const ctx = canvas.getContext('2d');
        // const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'images', 'ga.jpg'));
        // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // const member = await getMember(message, args.join(' '), false);
        // if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');
        // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));
        // ctx.drawImage(avatar, 310, 50, 100, 100);
        // const buffer = canvas.toBuffer();
        // const attachment = new MessageAttachment(buffer);
        // message.channel.send('Gà lắm', attachment);

        const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', 'ga-con.jpg'));
        const canvas = Canvas.createCanvas(background.width, background.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(background, 0, 0);
        const member = await getMember(message, args.join(' '), false);
        if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));
        ctx.drawImage(avatar, 310, 50, 100, 100);
        const buffer = canvas.toBuffer();
        const attachment = new MessageAttachment(buffer);
        message.channel.send(`|| Còn gà lắm ${member1.username}||`, attachment);

    }
}