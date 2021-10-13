
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
const ms = require('ms')


module.exports = {
    name: 'poll',
    aliases: [],
    category: 'general',
    usage: `tt1 <time> tt2 tl1 <title> tl2 "<Option 1>" "<Option 2>" "<Option 3>" "<Option 4>" `,
    description: `Tạo ra 1 cuộc bỏ phiếu điếm vote tự động và khóa vote theo thời gian\nHướng dẫn nhập\n ${prefix}poll2 tt1 10s tt2 tl1 Bỏ phiếu cho chó hoặc mèo ai nhiều phiếu hơn dc làm chúa tl2 "Team mèo" "Team Chó" `,

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
        const time = title.slice(Number(ts1) + 4, Number(ts2) - 1)
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

        const filter1 = reaction => reaction.emoji.name === '1️⃣';
        const filter2 = reaction => reaction.emoji.name === '2️⃣';
        const filter3 = reaction => reaction.emoji.name === '3️⃣';
        const filter4 = reaction => reaction.emoji.name === '4️⃣';
        const filter5 = reaction => reaction.emoji.name === '5️⃣';
        const filter6 = reaction => reaction.emoji.name === '6️⃣';
        const filter7 = reaction => reaction.emoji.name === '7️⃣';
        const filter8 = reaction => reaction.emoji.name === '8️⃣';
        const filter9 = reaction => reaction.emoji.name === '9️⃣';
        const filter10 = reaction => reaction.emoji.name === '🔟';
        // const f1 = '';
        // const f2 = '';

        const time2 = title.slice(Number(ts1) + 4, Number(ts2) - 2)
        const time3 = title.slice(Number(ts1) + 5, Number(ts2) - 1)
        // const t1t = Number(time2)*1000
        // const t1t = ''
        // const t1t1 = (Number('1') * 86400) * 1000
        // message.channel.send(time2);


        if (time3 == 'm') {

            const t1t = Number(time2) * 60000
            // const t1t = 60000

            msg.awaitReactions(filter1, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected1 ${emojis[0]} ${s.count}`)));
            msg.awaitReactions(filter2, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected2 ${emojis[1]} ${s.count}`)));
            msg.awaitReactions(filter3, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected3 ${emojis[2]} ${s.count}`)));
            msg.awaitReactions(filter4, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected4 ${emojis[3]} ${s.count}`)));
            msg.awaitReactions(filter5, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected5 ${emojis[4]} ${s.count}`)));
            msg.awaitReactions(filter6, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected6 ${emojis[5]} ${s.count}`)));
            msg.awaitReactions(filter7, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected7 ${emojis[6]} ${s.count}`)));
            msg.awaitReactions(filter8, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected8 ${emojis[7]} ${s.count}`)));
            msg.awaitReactions(filter9, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected9 ${emojis[8]} ${s.count}`)));
            msg.awaitReactions(filter10, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected10 ${emojis[9]} ${s.count}`)));
        }
        else if (time3 === 'h') {

            const t1t = Number(time2) * 216000

            msg.awaitReactions(filter1, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected1 ${emojis[0]} ${s.count}`)));
            msg.awaitReactions(filter2, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected2 ${emojis[1]} ${s.count}`)));
            msg.awaitReactions(filter3, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected3 ${emojis[2]} ${s.count}`)));
            msg.awaitReactions(filter4, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected4 ${emojis[3]} ${s.count}`)));
            msg.awaitReactions(filter5, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected5 ${emojis[4]} ${s.count}`)));
            msg.awaitReactions(filter6, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected6 ${emojis[5]} ${s.count}`)));
            msg.awaitReactions(filter7, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected7 ${emojis[6]} ${s.count}`)));
            msg.awaitReactions(filter8, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected8 ${emojis[7]} ${s.count}`)));
            msg.awaitReactions(filter9, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected9 ${emojis[8]} ${s.count}`)));
            msg.awaitReactions(filter10, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected10 ${emojis[9]} ${s.count}`)));

        }
        else if (time3 === 'd') {

            const t1t = Number(time2) * 86400

            msg.awaitReactions(filter1, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected1 ${emojis[0]} ${s.count}`)));
            msg.awaitReactions(filter2, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected2 ${emojis[1]} ${s.count}`)));
            msg.awaitReactions(filter3, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected3 ${emojis[2]} ${s.count}`)));
            msg.awaitReactions(filter4, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected4 ${emojis[3]} ${s.count}`)));
            msg.awaitReactions(filter5, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected5 ${emojis[4]} ${s.count}`)));
            msg.awaitReactions(filter6, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected6 ${emojis[5]} ${s.count}`)));
            msg.awaitReactions(filter7, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected7 ${emojis[6]} ${s.count}`)));
            msg.awaitReactions(filter8, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected8 ${emojis[7]} ${s.count}`)));
            msg.awaitReactions(filter9, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected9 ${emojis[8]} ${s.count}`)));
            msg.awaitReactions(filter10, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected10 ${emojis[9]} ${s.count}`)));

        }
        else {
            const t1t = Number(time2) * 1000

            msg.awaitReactions(filter1, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected1 ${emojis[0]} ${s.count}`)));
            msg.awaitReactions(filter2, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected2 ${emojis[1]} ${s.count}`)));
            msg.awaitReactions(filter3, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected3 ${emojis[2]} ${s.count}`)));
            msg.awaitReactions(filter4, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected4 ${emojis[3]} ${s.count}`)));
            msg.awaitReactions(filter5, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected5 ${emojis[4]} ${s.count}`)));
            msg.awaitReactions(filter6, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected6 ${emojis[5]} ${s.count}`)));
            msg.awaitReactions(filter7, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected7 ${emojis[6]} ${s.count}`)));
            msg.awaitReactions(filter8, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected8 ${emojis[7]} ${s.count}`)));
            msg.awaitReactions(filter9, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected9 ${emojis[8]} ${s.count}`)));
            msg.awaitReactions(filter10, { time: Number(t1t) }).
                then(collected => collected.map(s => message.channel.send(`Collected10 ${emojis[9]} ${s.count}`)));
        }


        setTimeout(function () {
            // msg = await message.channel.send('12321321');
            // msg.react('📜')

            // const filter1 = reaction => reaction.emoji.name === '1️⃣';
            // const filter2 = reaction => reaction.emoji.name === '2️⃣';
            // const filter3 = reaction => reaction.emoji.name === '3️⃣';
            // const filter4 = reaction => reaction.emoji.name === '4️⃣';
            // const filter5 = reaction => reaction.emoji.name === '5️⃣';
            // const filter6 = reaction => reaction.emoji.name === '6️⃣';
            // const filter7 = reaction => reaction.emoji.name === '7️⃣';
            // const filter8 = reaction => reaction.emoji.name === '8️⃣';
            // const filter9 = reaction => reaction.emoji.name === '9️⃣';
            // const filter10 = reaction => reaction.emoji.name === '🔟';

            // const f1 = '';
            // const f2 = '';
            // const f3 = '';
            // const f4 = '';
            // const f5 = '';
            // const f6 = '';
            // const f7 = '';
            // const f8 = '';
            // const f9 = '';
            // const f10 = '';

            // msg.awaitReactions(filter1, { time: 1 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected1 ${s.count}`)));
            // msg.awaitReactions(filter2, { time: 1 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected2 ${s.count}`)));
            // msg.awaitReactions(filter3, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected3 ${s.count}`)));
            // msg.awaitReactions(filter4, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected4 ${s.count}`)));
            // msg.awaitReactions(filter5, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected5 ${s.count}`)));
            // msg.awaitReactions(filter6, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected6 ${s.count}`)));
            // msg.awaitReactions(filter7, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected7 ${s.count}`)));
            // msg.awaitReactions(filter8, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected8 ${s.count}`)));
            // msg.awaitReactions(filter9, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected9 ${s.count}`)));
            // msg.awaitReactions(filter10, { time: 1000 }).
            //     then(collected => collected.map(s => message.channel.send(`Collected10 ${s.count}`)));


            msg.reactions.removeAll();
            msg.reactions.removeAll();
            message.channel.send(` đã được chốt yêu cầu ko dc vote tiếp.  \n ||<@${message.author.id}>||`)

        }, ms(time));



    }
}