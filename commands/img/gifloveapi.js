
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const loveyou = require("loveyou-api");

module.exports = {
    name: 'giflove',
    aliases: ['gl'],
    category: 'img',
    usage: "<cumshots>",
    description: 'Tìm gif se*(x) theo các từ khóa :\nboobs,pussy,ass,missionary,cowgirl,doggystyle,blowjob,cumshots,hentai',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.channel.send("Lệnh này chỉ sử dụng được ở channel có bật mode NSFW!");
        else {
            var as12 = ['boobs', 'pussy', 'ass', 'missionary', 'cowgirl', 'doggystyle', 'blowjob', 'cumshots', 'hentai'];
            const bargs = message.content.split(' ');
            const searchString = bargs.slice(1).join(' ')


            for (var i = 0; i < as12.length; i++) {
                // if(!args[0] || searchString != as12[i]){
                //     message.channel.send('Bạn đã nhập sai hoặc để trống xin nhập lại, gợi ý từ khóa: \n boobs,pussy,ass,missionary,cowgirl,doggystyle,blowjob,cumshots,hentai')
                //     break;
                // }
                if (!args[0]) {
                    message.channel.send('Bạn đã nhập sai hoặc để trống xin nhập lại, gợi ý từ khóa: \n boobs,pussy,ass,missionary,cowgirl,doggystyle,blowjob,cumshots,hentai')
                    break;
                }
                else {
                    loveyou.nsfw(`${searchString}`).then(url => message.channel.send(url));
                    break;
                }

            }

            // if(!args[0] || searchString != as12 ) return message.channel.send('Xin nhập vào để tìm kiếm ví dụ: (...000 pussy) \n boobs,pussy,ass,missionary,cowgirl,doggystyle,blowjob,cumshots,hentai');

            // if(!args[0] ) return message.channel.send('Xin nhập vào để tìm kiếm ví dụ: (...000 pussy) \n boobs,pussy,ass,missionary,cowgirl,doggystyle,blowjob,cumshots,hentai');
            // if( searchString !== as12 ) return message.channel.send('Xin nhập vào để tìm kiếm ví dụ: (...000 pussy) \n boobs,pussy,ass,missionary,cowgirl,doggystyle,blowjob,cumshots,hentai');

            // loveyou.nsfw(`${searchString}`).then(url => message.channel.send(url));


        }
    }
}