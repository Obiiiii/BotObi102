const Canvas = require('canvas');
const { join } = require('path');
module.exports = {
    welcome: async function welcome(username, discrim, avatarURL, membersize) {
        if (!username) throw new Error("No username was provided");
        if (!discrim) throw new Error("No discrim was provided!");
        if (!avatarURL) throw new Error("No avatarURL was provided!");
        if (!membersize) throw new Error("No membersize was provided!");

        Canvas.registerFont(join(__dirname, '..', 'assets', 'font', 'BungeeInline-Regular.ttf'), { family: 'Cadena', weight: "regular", style: "normal" });
        // create canvas
        const canvas = Canvas.createCanvas(1000, 450);
        // const canvas = Canvas.createCanvas(canvas.width, canvas.height);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage(join(__dirname, '..', 'assets', 'imgedit', 'animewp.jpg'));
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const font = 'Cadena';

        // ctx.font = `30px ${font}`;
        // ctx.fillStyle = '#ffffff';
        // ctx.textAlign = 'start';
        // ctx.shadowBlur = 10;
        // ctx.shadowColor = 'pink';
        // // ctx.fillText('Chào mừng bạn', 260, 100);
        // ctx.fillText('Chào mừng bạn', 130, 50);

        // ctx.font = `30px ${font}`;
        ctx.font = `70px ${font}`;
        ctx.fillStyle = '#ffffff';//#e80962
        ctx.textAlign = 'start';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'pink';
        ctx.fillText('Chào mừng bạn', 280, 190);
        // ctx.fillText('Chào mừng bạn', 220, 60);

        // const welcometextPosition = { width: 130, height: 75 };
        // let fontSize = 25;
        // ctx.font = `${fontSize}px ${font}`;

        const welcometextPosition = { width: 280, height: 275 };
        let fontSize = 55;
        // let fontSize = 25;
        // let fontSize = 35;
        ctx.font = `${fontSize}px ${font}`;

        do {
            fontSize -= 1;
            ctx.font = `${fontSize}px ${font}`;
        } while (ctx.measureText(`${username}#${discrim}!`).width > 430);

        ctx.fillStyle = '#ffffff';
        // ctx.fillStyle = '#000000';
        ctx.textAlign = 'start';
        ctx.fillText(`${username}`, welcometextPosition.width, welcometextPosition.height, 455);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.textAlign = 'start';
        ctx.fillText(`#${discrim}!`, ctx.measureText(`${username}`).width + welcometextPosition.width, welcometextPosition.height);
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        // ctx.fillStyle = '#000000';
        ctx.textAlign = 'start';
        ctx.font = `29px ${font}`;
        ctx.shadowColor = 'pink';
        ctx.fillText(`Bạn là người thứ ${membersize} của server!`, welcometextPosition.width, welcometextPosition.height + 70);
        ctx.beginPath();
        // ctx.arc(77, 77, 50, 0, Math.PI * 2, true);
        ctx.arc(125, 235, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(avatarURL);
        // ctx.drawImage(avatar, 25, 25, 120, 120);
        ctx.drawImage(avatar, 25, 135, 200, 200);
        // return canvas.toBuffer();
        // const buffer = canvas.toBuffer();
        // const attachment = new MessageAttachment(buffer);
        return canvas.toBuffer();


    },
};