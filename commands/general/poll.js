
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
const ms = require('ms')


module.exports = {
    name: 'poll2',
    aliases: [],
    category: 'general',
    usage: `<tt1 10s tt2> <tl1 Bỏ phiếu cho chó hoặc mèo ai nhiều phiếu hơn dc làm chúa tl2> <"Team mèo" "Team Chó"> `,
    description: 'Tạo ra 1 cuộc bỏ phiếu ko điếm vote \nHướng dẫn nhập\n==poll tt1 10s tt2 tl1 Bỏ phiếu cho chó hoặc mèo ai nhiều phiếu hơn dc làm chúa tl2 "Team mèo" "Team Chó" ',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // const messageArray = message.content.split(' ');
        // const args1 = messageArray.slice(1);
        // const title = messageArray;
        // const options = messageArray;
        // const polls = args.slice(1).join(' ')

        // var emojiList = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','✅'];

        // var emojiList = ['✅'];
        // var forceEndPollEmoji = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];
        // var forceEndPollEmoji = [':white_check_mark:'];


        const args1 = message.content.substring(prefix.length).split('')
        const polls = args1.slice(1).join('')
        // const polls = args.slice().join('')
        // message.channel.send(polls)
        const regex = polls.match(/"[^"]+"|[\\S]+"[^"]+/g)

        const title = args.slice().join(' ')
        let ps1 = title.indexOf("tl1")
        let ps2 = title.indexOf("tl2")
        let ts1 = title.indexOf("tt1")
        let ts2 = title.indexOf("tt2")
        const title2 = title.slice(Number(ps1) + 4, Number(ps2))
        const time = title.slice(Number(ts1) + 4, Number(ts2)-1)
        // message.channel.send(`${title}\n${Number(ps1)},${Number(ps2)}`)


        if (regex.length >= 11) {
            return message.reply('Bạn chỉ có thể tạo 10 lựa chọn trở xuống')
        }

        let str = ''

        let emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

        let i = 0

        for (const poll of regex) {
            str = str + `${emojis[i]} \`${poll}\`\n\n`
            i++
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(`${title2} \n Poll này sẽ kết thúc trong ${time}`)
            .setDescription(str.replace(/"/g, ''))
            .setFooter(`Poll created by ${message.author.tag}`);

        const msg = await message.channel.send(embed)
        // msg.channel.send('đã kết thúc');

        for (let i = 0; i < regex.length; i++) {
            msg.react(emojis[i])
        }

        setTimeout(function () {

            message.channel.send(` đã được chốt yêu cầu ko dc vote tiếp. \n ||<@${message.author.id}>||`)

        }, ms(time));



    }
}