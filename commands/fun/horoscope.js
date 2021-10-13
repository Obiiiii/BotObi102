
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
apiipkey = config.apiipkey;
myip = config.myip;
const publicIP = require('public-ip');
// const ipgeolocation = process.env.IPGEOLOCATION;
// const axios = require('axios');
// const { getPing } = require('../../functions/economy');

const request = require('node-superfetch');
const signs = require('../../assets/json/signs.json');
const axios = require('axios');

module.exports = {
    name: 'horoscope',
    aliases: ['hs'],
    category: 'fun',
    usage: "<Cung?>",
    description: 'Đoán tử vi ngày hôm nay cho bạn',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // try {
        //     const sign = args.join(" ");
        //     if (!sign) return message.channel.send("Cách sử dụng lệnh: `horoscope <Sign>`");

        //     if (!signs.includes(sign.toLowerCase())) return message.channel.send('Đây không phải là một Cung hợp lệ! \ncapricorn = Ma Kết \naquarius = Bảo Bình \npisces = Song Ngư\naries = Bạch Dương\ntaurus = Kim Ngưu\ngemini = Song Tử\ncancer = Cự Giải\nleo = Sư Tử\nvirgo = Xử Nữ\nlibra = Thiên Bình\nscorpio = Bò Cạp\nsagittarius = Nhân Mã\n');

        //     const text = await request.get(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/today`);
        //     const body = JSON.parse(text.body);

        //     let horoscope = body.horoscope
        //     let replaced = horoscope.replace('(c) Kelli Fox, The Astrologer, http://new.theastrologer.com', '')

        //     const embed = new MessageEmbed()
        //         .setColor('RANDOM')
        //         .setAuthor(`🔮 | Horoscope for ${body.sunsign} on ${body.date}`, 'http://images.indianexpress.com/2017/01/zodiac-love-2017-main_820_thinkstockphotos-481896132.jpg?w=820')
        //         .setDescription(replaced)
        //         .setTimestamp()
        //         .setFooter(`${message.author.username}'s Horoscope`)
        //         .addField('Mood', body.meta.mood, true)
        //         .addField("Intensity", body.meta.intensity, true);
        //     return message.channel.send({ embed });
        // } catch (err) {
        //     return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        // }


        let dateObj = new Date();

        let myDate = (dateObj.getFullYear()) + "-" + (dateObj.getMonth() + 1) + "-" + (dateObj.getDate());

        // message.channel.send(myDate)

        const sign = args.join(" ");
        if (!sign) return message.channel.send("Cách sử dụng lệnh: `horoscope <Sign>`");

        if (!signs.includes(sign.toLowerCase())) return message.channel.send('Đây không phải là một Cung hợp lệ! \ncapricorn = Ma Kết \naquarius = Bảo Bình \npisces = Song Ngư\naries = Bạch Dương\ntaurus = Kim Ngưu\ngemini = Song Tử\ncancer = Cự Giải\nleo = Sư Tử\nvirgo = Xử Nữ\nlibra = Thiên Bình\nscorpio = Bò Cạp\nsagittarius = Nhân Mã\n');

        // let horoscope = body.horoscope
        // let replaced = horoscope.replace('(c) Kelli Fox, The Astrologer, http://new.theastrologer.com', '')


        const options = {
            method: 'GET',
            url: 'https://horoscope5.p.rapidapi.com/general/daily',
            // params: { sign: 'cancer', date: '2020-05-02' },
            params: { sign: `${sign}`, date: `${myDate}` },
            headers: {
                'x-rapidapi-key': '49867946c9msh3be5ab92ab926ccp1d7bd3jsn1803a1d5a908',
                'x-rapidapi-host': 'horoscope5.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.result.date);
            //   console.log(response.date);
            //   message.channel.send(response.data.result.date);



            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(`🔮 | Tử vi cho ${message.author.username} trong ngày ${response.data.result.date}`, 'http://images.indianexpress.com/2017/01/zodiac-love-2017-main_820_thinkstockphotos-481896132.jpg?w=820')
                .setDescription(response.data.result.description)
                .setTimestamp()
                .setFooter(`${message.author.username}'s Horoscope`)

            message.channel.send(embed);
            // message.channel.send(reresponse.data.sign.name);


        }).catch(function (error) {
            console.error(error);
        });

    }
}