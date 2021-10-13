
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: 'imgfind',
  aliases: ['if'],
  category: 'img',
  usage: "<wallpaper>",
  description: 'Tìm hình ảnh chất lượng cho bạn dựa trên từ khóa: \n Anal (anal), 4K (fourk), Ass (ass), Gonewild (gonewild), Porngif (pgif), Pussy (pussy), Thigh (thigh), Boobs (boobs), Hentai Ass (hentaiass), Hentai (hentai), Hentai Midriff (hmidriff), Hentai Thigh (hentaithigh), Erokemo (erokemo), Kitsune (kitsune), Lewd (lewd), Neko Feet (nekofeet), Neko Pussy (nekopussy), Neko Tits (nekotits), Solo (solo), Wallpaper (wallpaper)',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("Lệnh này chỉ sử dụng được ở channel có bật mode NSFW!");
    else {

      const bargs = message.content.split(' ');
      const searchString = bargs.slice(1).join(' ')


      // const image = await nsfw.pussy();
      // const embed = new Discord.MessageEmbed()
      // .setTitle(`123151`)
      // .setColor("GREEN")
      // .setImage(image);
      // message.channel.send(embed);


      switch (searchString) {
        case 'anal':
          const image1 = await nsfw.anal();
          const embed1 = new Discord.MessageEmbed()
            .setTitle(`Anal `)
            .setColor("GREEN")
            .setImage(image1);
          message.channel.send(embed1);
          break;
        case 'fourk':
          const image2 = await nsfw.fourk();
          const embed2 = new Discord.MessageEmbed()
            .setTitle(`4K`)
            .setColor("GREEN")
            .setImage(image2);
          message.channel.send(embed2);
          break;
        case 'ass':
          const image3 = await nsfw.ass();
          const embed3 = new Discord.MessageEmbed()
            .setTitle(`Ass`)
            .setColor("GREEN")
            .setImage(image3);
          message.channel.send(embed3);
          break;
        case 'gonewild':
          const image4 = await nsfw.gonewild();
          const embed4 = new Discord.MessageEmbed()
            .setTitle(`Gonewild`)
            .setColor("GREEN")
            .setImage(image4);
          message.channel.send(embed4);
          break;
        case 'pgif':
          const image5 = await nsfw.pgif();
          const embed5 = new Discord.MessageEmbed()
            .setTitle(`Porngif`)
            .setColor("GREEN")
            .setImage(image5);
          message.channel.send(embed5);
          break;
        case 'pussy':
          const image6 = await nsfw.pussy();
          const embed6 = new Discord.MessageEmbed()
            .setTitle(`Pussy`)
            .setColor("GREEN")
            .setImage(image6);
          message.channel.send(embed6);
          break;
        case 'thigh':
          const image7 = await nsfw.thigh();
          const embed7 = new Discord.MessageEmbed()
            .setTitle(`Thigh`)
            .setColor("GREEN")
            .setImage(image7);
          message.channel.send(embed7);
          break;
        case 'boobs':
          const image8 = await nsfw.boobs();
          const embed8 = new Discord.MessageEmbed()
            .setTitle(`Boobs`)
            .setColor("GREEN")
            .setImage(image8);
          message.channel.send(embed8);
          break;
        case 'solo':
          const image9 = await nsfw.solo();
          const embed9 = new Discord.MessageEmbed()
            .setTitle(`Solo`)
            .setColor("GREEN")
            .setImage(image9);
          message.channel.send(embed9);
          break;
        case 'hentaiass':
          const image10 = await nsfw.hentaiass();
          const embed10 = new Discord.MessageEmbed()
            .setTitle(`Hentai Ass`)
            .setColor("GREEN")
            .setImage(image10);
          message.channel.send(embed10);
          break;
        case 'hentai':
          const image11 = await nsfw.hentai();
          const embed11 = new Discord.MessageEmbed()
            .setTitle(`Hentai`)
            .setColor("GREEN")
            .setImage(image11);
          message.channel.send(embed11);
          break;
        case 'hmidriff':
          const image12 = await nsfw.hmidriff();
          const embed12 = new Discord.MessageEmbed()
            .setTitle(`Hmidriff`)
            .setColor("GREEN")
            .setImage(image12);
          message.channel.send(embed12);
          break;
        case 'hentaithigh':
          const image13 = await nsfw.hentaithigh();
          const embed13 = new Discord.MessageEmbed()
            .setTitle(`Hentai Thigh`)
            .setColor("GREEN")
            .setImage(image13);
          message.channel.send(embed13);
          break;
        case 'erokemo':
          const image14 = await nsfw.erokemo();
          const embed14 = new Discord.MessageEmbed()
            .setTitle(`Erokemo`)
            .setColor("GREEN")
            .setImage(image14);
          message.channel.send(embed14);
          break;
        case 'kitsune':
          const image15 = await nsfw.kitsune();
          const embed15 = new Discord.MessageEmbed()
            .setTitle(`Kitsune`)
            .setColor("GREEN")
            .setImage(image15);
          message.channel.send(embed15);
          break;
        case 'lewd':
          const image16 = await nsfw.lewd();
          const embed16 = new Discord.MessageEmbed()
            .setTitle(`Lewd`)
            .setColor("GREEN")
            .setImage(image16);
          message.channel.send(embed16);
          break;
        case 'nekofeet':
          const image17 = await nsfw.nekofeet();
          const embed17 = new Discord.MessageEmbed()
            .setTitle(`Neko Feet`)
            .setColor("GREEN")
            .setImage(image17);
          message.channel.send(embed17);
          break;
        case 'nekopussy':

          const image18 = await nsfw.nekopussy();
          const embed18 = new Discord.MessageEmbed()
            .setTitle(`Neko Pussy`)
            .setColor("GREEN")
            .setImage(image18);
          message.channel.send(embed18);
          break;

        case 'wallpaper':
          const image = await nsfw.wallpaper();
          const embed = new Discord.MessageEmbed()
            .setTitle(`wallpaper`)
            .setColor("GREEN")
            .setImage(image);
          message.channel.send(embed);
          break;
        default: message.channel.send('Nhập sai hoặc chưa nhập gợi ý \n Anal (anal), 4K (fourk), Ass (ass), Gonewild (gonewild), Porngif (pgif), Pussy (pussy), Thigh (thigh), Boobs (boobs), Hentai Ass (hentaiass), Hentai (hentai), Hentai Midriff (hmidriff), Hentai Thigh (hentaithigh), Erokemo (erokemo), Kitsune (kitsune), Lewd (lewd), Neko Feet (nekofeet), Neko Pussy (nekopussy), Neko Tits (nekotits), Solo (solo), Wallpaper (wallpaper)')

      }
    }

  }
}