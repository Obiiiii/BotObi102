  
const Canvas = require('canvas');
const { join } = require('path');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name : 'ping3',
    aliases : ['p3'],
    category : 'info',
    usage: "<@tag>",
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {


        let member = message.mentions.users.first() || message.author

        const avatarURL = member.displayAvatarURL({ format: 'png', dynamic: false })

        // const member = await getMember(message, args.join(' '), false);
        // if (!member) return message.channel.send('Vui lòng tag hoặc nhập ID');

        // member.user.username, member.user.discriminator, member.user.displayAvatarURL({ format: 'png', dynamic: false })

        // Canvas.registerFont(join(__dirname, '..', '..', 'assets', 'font', 'Cadena.ttf'), { family: 'Cadena', weight: "regular", style: "normal" });
        Canvas.registerFont(join(__dirname, '..', '..', 'assets', 'font', 'NunitoSans-Light.ttf'), { family: 'Cadena123', weight: "regular", style: "normal" });
        Canvas.registerFont(join(__dirname, '..', '..', 'assets', 'font', 'BungeeInline-Regular.ttf'), { family: 'Cadena', weight: "regular", style: "normal" });
        // create canvas
        // const canvas = Canvas.createCanvas(1000, 450);
        const canvas = Canvas.createCanvas(1000, 450);
        // const canvas = Canvas.createCanvas(canvas.width, canvas.height);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', 'animewp.jpg'));
        // const background = await Canvas.loadImage(join(__dirname, '..', '..', 'assets', 'imgedit', '47086.jpg'));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const font = 'Cadena';
        const font123 = 'Cadena123';

        // ctx.font = `30px ${font}`;
        // ctx.font = `40px ${font}`;
        ctx.font = `60px ${font}`;
        ctx.fillStyle = '#ffffff';//#e80962
        // ctx.fillStyle = '#2ecc71';
        ctx.textAlign = 'start';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'pink';
        ctx.fillText('Chào mừng bạn', 25, 70);
        // ctx.fillText('Chào mừng bạn', 220, 60);

        // const welcometextPosition = { width: 260, height: 150 };
        // const welcometextPosition = { width: 220, height: 90 };
        const welcometextPosition = { width: 25, height: 365 };
        // let fontSize = 55;
        let fontSize = 75;
        // let fontSize = 25;
        // let fontSize = 35;
        ctx.font = `${fontSize}px ${font}`;

        // do {
        //     fontSize -= 1;
        //     ctx.font = `${fontSize}px ${font}`;
        // } while (ctx.measureText(`${member.username}#${member.discriminator}!`).width > 430);

        // fontSize -= 20;
        // ctx.font = `${fontSize}px ${font}`;
        ctx.font = `77px ${font}`;
        ctx.measureText(`${member.username}#${member.discriminator}!`).width > 430

        ctx.fillStyle = '#ffffff';
        // ctx.fillStyle = '#e80962';
        // ctx.fillStyle = '#000000';
        ctx.textAlign = 'start';
        ctx.fillText(`${member.username}`, welcometextPosition.width, welcometextPosition.height, 455);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.textAlign = 'start';
        ctx.fillText(`#${member.discriminator}!`, ctx.measureText(`${member.username}`).width + welcometextPosition.width, welcometextPosition.height);
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        // ctx.fillStyle = '#e80962';
        // ctx.fillStyle = '#000000';
        ctx.textAlign = 'start';
        // ctx.font = `29px ${font}`;
        ctx.font = `39px ${font123}`;
        ctx.shadowColor = 'pink';
        // tx.fillText(`Bạn là người thứ của server!`, welcometextPosition.width, welcometextPosition.height + 40);
        ctx.fillText(`Bạn là người thứ của server!`, welcometextPosition.width, welcometextPosition.height + 50);
        ctx.beginPath();
        ctx.arc(124, 185, 100, 0, Math.PI * 2, true);
        // ctx.arc(115, 115, 90, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(avatarURL);
        ctx.drawImage(avatar, 25, 85, 200, 200);
        // ctx.drawImage(avatar, 25, 25, 190, 190);
        // return canvas.toBuffer();
        const buffer = canvas.toBuffer();
        const attachment = new MessageAttachment(buffer);
        message.channel.send( attachment);

    }
}