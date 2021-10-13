
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
const API_URL = 'https://waifu.pics/api'

module.exports = {
  name: 'imgganime',
  aliases: ['imgap'],
  category: 'img',
  usage: "<sfw> <waifu>",
  description: 'Đưa ra ảnh theo 2 trường phái nsfw và sfw \n bạn có thể chọn trong đó nsfw(waifu,neko,trap,blowjob),\n sfw(pat,smug,highfive,nom,bite,slap,happy,wink,poke,dance,cringe,blush)',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {

    // if (!message.channel.nsfw) return message.channel.send("Lệnh này chỉ sử dụng được ở channel có bật mode NSFW!");

    // else {
    if (!args[0]) return message.channel.send('bạn đã để trống gợi ý: ..4 sfw pat\n nsfw(waifu,neko,trap,blowjob)\n sfw(pat,smug,highfive,nom,bite,slap,happy,wink,poke,dance,cringe,blush) ');
    const type = message.content.slice(prefix.length).trim().split(' ');
    const ss = type[1];
    const ss2 = type[2];

    if (ss === 'sfw') {
      const { url } = await fetch(`${API_URL}/${ss}/${ss2}`).then(response => response.json());
      message.channel.send(url);
      if (!url) {
        message.channel.send('Bạn đã nhập sai, gợi ý: (..imgap sfw pat)\n nsfw(waifu,neko,trap,blowjob)\n sfw(waifu,pat,smug,highfive,nom,bite,slap,happy,wink,poke,dance,cringe,blush) ');
      }
    }

    else {
      if (!message.channel.nsfw) return message.channel.send("Lệnh này chỉ sử dụng được ở channel có bật mode NSFW!");
      else { 
        const { url } = await fetch(`${API_URL}/${ss}/${ss2}`).then(response => response.json());
        message.channel.send(url);
        if (!url) {
          message.channel.send('Bạn đã nhập sai, gợi ý: (..imgap sfw pat)\n nsfw(waifu,neko,trap,blowjob)\n sfw(pat,smug,highfive,nom,bite,slap,happy,wink,poke,dance,cringe,blush) ');
        }
      }

    }
    // const type = message.content.slice(prefix.length).trim().split(' ');

    // const ss = type[1];
    // const ss2 = type[2];

    // const { url } = await fetch(`${API_URL}/${ss}/${ss2}`).then(response => response.json());
    // message.channel.send(url);

    // if (!url) {
    //   message.channel.send('Bạn đã nhập sai, gợi ý: (..4 sfw pat)\n nsfw(waifu,neko,trap,blowjob)\n sfw(pat,smug,highfive,nom,bite,slap,happy,wink,poke,dance,cringe,blush) ');
    // }
    // }
  }
}