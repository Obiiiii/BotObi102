
// const { MessageEmbed } = require('discord.js');
// const Discord = require('discord.js');
// const fetch = require('node-fetch');

// const { createCanvas, loadImage } = require('canvas')
// const { createCanvas, loadImage } = require('canvas')
// const Canvas = require('canvas');
// const { MessageAttachment } = require('discord.js');
// const { join } = require('path');
// const { getMember } = require('../../functions/utils');

// const config = require("../../config.json");
// prefix = config.prefix;

const Canvas = require('canvas');
const jimp = require("jimp");
const { MessageAttachment } = require('discord.js');
const { join } = require('path');
const { getMember } = require('../../functions/utils');


module.exports = {
    name: 'ping2',
    aliases: ['p2'],
    category: 'info',
    usage: "",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {


        // let member = message.mentions.users.first() || message.author

        // const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', 'ga-con.jpg'));
        // const canvas = Canvas.createCanvas(background.width, background.height);
        // // const canvas = Canvas.createCanvas(700, 250);
        // const ctx = canvas.getContext("2d");
        // // Canvas.registerFont('comicsans.ttf', { family: 'Comic Sans' })
        // // Canvas.registerFont('comicsans.ttf', { family: 'Comic Sans' })
        // Canvas.registerFont(__dirname + '/normal.ttf', {
        //     family: 'Manrope',
        //     weight: 'regular',
        //     style: 'normal'
        //   });
        //   Canvas.registerFont(__dirname + '/bold.ttf', {
        //     family: 'Manrope',
        //     weight: 'bold',
        //     style: 'normal'
        //   });
        // const font = 'Manrope';
        // // Canvas.registerFont(__dirname + '/normal.ttf', {
        // //     family: 'Manrope',
        // //     weight: 'regular',
        // //     style: 'normal'
        // //   });

        // // ctx.font = `bold 36px ${font}`;
        // ctx.font = `bold 36px "Comic Sans"`;
        // // ctx.fillStyle = "#FFFFFF";
        // // ctx.textAlign = "start";
        // // ctx.strokeStyle = "#f5f5f5";
        // // ctx.fillText(`Thành`, 278, 113);
        // // ctx.strokeText(`Thành123`, 278, 113);
        // ctx.fillText('Everyone hates this font :(', 250, 10)
        // // let image = await jimp.read(
        // //     member.user.displayAvatarURL({ format: "jpg", dynamic: true })
        // // );
        // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));
        // // image.resize(1024, 1024);
        // // image.circle();
        // // const avatar = await Canvas.loadImage(raw);
        // ctx.drawImage(avatar, 72, 48, 150, 150);
        // // canvas.toBuffer();
        // const buffer = canvas.toBuffer();
        // const attachment = new MessageAttachment(buffer);
        // message.channel.send(`|| Còn gà lắm ${member1.username}||`, attachment);


        ///123213123123132132131312



        // const args12 = message.content.slice(prefix.length).trim().split(' ');
        // const args123 = args12[1];

        // let member = message.mentions.users.first() || message.author

        // message.channel.send(member.displayAvatarURL({ format: 'jpg', size: 128 }));

        // registerFont('comicsans.ttf', { family: 'Comic Sans' })
        // let member1 = message.mentions.users.first() || message.author


        // const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', 'ga-con.jpg'));
        // const canvas = Canvas.createCanvas(background.width, background.height);
        // const ctx = canvas.getContext('2d');
        // const member = await getMember(message, args.join(' '), false);
        // if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');
        // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));
        // ctx.drawImage(avatar, 310, 50, 100, 100);
        // const buffer = canvas.toBuffer();
        // const attachment = new MessageAttachment(buffer);
        // message.channel.send(`|| Còn gà lắm ${member1.username}||`, attachment);

        /////1232132132133333333333333333333333333333333333333333333333333

        let member1 = message.mentions.users.first() || message.author

        const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', '47086.jpg'));
        const canvas = Canvas.createCanvas(background.width, background.height);
        const ctx = canvas.getContext('2d');
        
        // ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // let blurImage = await Canvas.loadImage(
        //     "https://coverfiles.alphacoders.com/470/47086.png"
        //   );
    
    
        // ctx.drawImage(blurImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0,canvas.width, canvas.height);

        // registerFont(__dirname + '/normal.ttf', {
        //     family: 'Manrope',
        //     weight: 'regular',
        //     style: 'normal'
        //   });
        const font = 'Manrope';
        // ctx.font = `bold 36px ${font}`;
        ctx.font = '20px Impact'
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        ctx.strokeStyle = "#f5f5f5";
        // ctx.font = '12px "Comic Sans"'
        ctx.fillText('gjhasgdjhsajdhagdskjsahkjdhaskjhd :(', 278, 113)
        // ctx.fillText(`#${member.user.discriminator}`, 278, 160);

        const member = await getMember(message, args.join(' '), false);
        if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');

        let image = await jimp.read(
            member.user.displayAvatarURL({ format: "jpg", dynamic: true })
          );

        image.resize(1024, 1024);
        image.circle();
        let raw = await image.getBufferAsync("image/png");

        // var text = ctx.measureText('Awesome!')
        // ctx.strokeStyle = 'rgba(0,0,0,0.5)'
        // ctx.beginPath()
        // ctx.lineTo(50, 102)
        // ctx.lineTo(50 + text.width, 102)
        // ctx.stroke()


        const avatar = await Canvas.loadImage(raw);
        // ctx.drawImage(background, 0, 0);
        // const member = await getMember(message, args.join(' '), false);
        // if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');
        // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 128 }));
        ctx.drawImage(avatar, 72, 48, 150, 150);
        const buffer = canvas.toBuffer();
        const attachment = new MessageAttachment(buffer);
        message.channel.send(`|| Còn gà lắm ${member1.username}||`, attachment);

    }
}