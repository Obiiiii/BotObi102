const Canvas = require('canvas');
const { join } = require('path');
const jimp = require("jimp");
module.exports = {
    welcome: async function welcome(
        avatar,
        name,
        discriminator,
        currentXP,
        fullXP,
        level,
        rank,
        xpdf2) {
        if (!level) {
            throw new Error("You did not gave Level of the person");
        }

        Canvas.registerFont(join(__dirname, '..', 'assets', 'font', 'BungeeInline-Regular.ttf'), { family: 'Cadena', weight: "regular", style: "normal" });
        // create canvas
        // const canvas = Canvas.createCanvas(1000, 450);
        const canvas = Canvas.createCanvas(700, 250);
        // const canvas = Canvas.createCanvas(canvas.width, canvas.height);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage(join(__dirname, '..', 'assets', 'imgedit', 'animedaohoa.jpg'));
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'pink';
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // let mraw = await background.getBufferAsync("image1/png");
        // const fixedbkg = await Canvas.loadImage(mraw);
        // ctx.drawImage(fixedbkg, 0, 0, canvas.width, canvas.height);
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        const font = 'Cadena';

        let blurImage = await Canvas.loadImage(join(__dirname, '..', 'assets', 'rankcard', 'back.jpg'));

        ctx.drawImage(blurImage, 0, 0, canvas.width, canvas.height);

        let image = await jimp.read(avatar);
        image.resize(1024, 1024);
        image.circle();

        let raw = await image.getBufferAsync("image/png");

        const profile = await Canvas.loadImage(raw);
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'red';

        ctx.drawImage(profile, 44, 48, 155, 155);

        ctx.font = `bold 30px ${font}`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'pink';
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        ctx.strokeStyle = "#f5f5f5";
        


        const xname =
            name.length > 18 ? name.substring(0, 18).trim() + "..." : name;
        ctx.shadowBlur = 1;
        ctx.fillText(`${name}`, 340, 55);

        ctx.font = `bold 30px ${font}`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'pink';
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        ctx.strokeStyle = "#f5f5f5";
        

        ctx.fillText(`${discriminator}`, 580, 88);

        let x = 240;
        let y = 144;
        ctx.font = `bold 30px ${font}`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'pink';
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "start";
        ctx.fillText(
            "/ " + change(fullXP),
            x + ctx.measureText(change(currentXP)).width + 15,
            y
        );

        ctx.fillText(change(currentXP), x, y);

        // let converted = currentXP;
        // if (typeof currentXP === "string") converted = parseInt(currentXP)
        // let widthXP = (converted * 439) / fullXP;
        // if (widthXP > 439 - 18.5) widthXP = 439 - 18.5
        // ctx.beginPath();

        let converted = fullXP;
        if (typeof fullXP === "string") converted = parseInt(fullXP)
        let widthXP = (converted * 439) / fullXP;
        if (widthXP > 439 - 18.5) widthXP = 439 - 18.5
        ctx.beginPath();


        console.log(widthXP);
        ctx.fillRect(239, 119.5 + 36.25, widthXP, 23.5);


        // const RankN = rank.length > 5 ? rank.substring(0, 5).trim() + "+" : rank;
        const RankN = rank;
        ctx.shadowColor = 'black';
        ctx.fillText(`${RankN}`, 310, 212);

        // const levelN =
        //     level.length >= 1 ? level.substring(0, 6).trim() + "+" : level;
        const levelN = level;
        ctx.shadowColor = 'black';
        ctx.fillText(`${levelN}`, 500, 212);

        return canvas.toBuffer();

    },
};
function change(num) {
    if (!num) return "NaN";
    if (typeof num === "string") num = parseInt(num);
    let decPlaces = Math.pow(10, 1);
    var abbrev = ["K", "M", "B", "T"];
    for (var i = abbrev.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3);
        if (size <= num) {
            num = Math.round((num * decPlaces) / size) / decPlaces;
            if (num == 1000 && i < abbrev.length - 1) {
                num = 1;
                i++;
            }
            num += abbrev[i];
            break;
        }
    }
    return num;
}