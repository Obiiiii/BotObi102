
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;

const axios = require('axios');


module.exports = {
    name: 'trade',
    aliases: [],
    category: 'general',
    usage: "<Đơn vị tiền tệ muốn chuyển> <Đơn vị tiền tệ muốn thành> <Giá trị tiền tệ muốn chuyển thành>",
    description: 'Chuyển đổi tiền tệ',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        const type = message.content.slice(prefix.length).trim().split(' ');
        const ss = type[1];
        const ss2 = type[2];
        const ss3 = type[3];

        // const options = {
        //     method: 'GET',
        //     url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
        //     params: {from: 'USD', to: 'ILS', amount: '12'},
        //     headers: {
        //       'x-rapidapi-key': '49867946c9msh3be5ab92ab926ccp1d7bd3jsn1803a1d5a908',
        //       'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com'
        //     }
        //   };

        //   axios.request(options).then(function (response) {
        //       console.log(response.data.result);
        //       message.channel.send(response.data.result)
        //   }).catch(function (error) {
        //       console.error(error);
        //   });

        //************************************************** */
        const options = {
            method: 'GET',
            url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
            params: { from: `${ss}`, to: `${ss2}`, amount: `${ss3}` },
            headers: {
                'x-rapidapi-key': '49867946c9msh3be5ab92ab926ccp1d7bd3jsn1803a1d5a908',
                'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            // message.channel.send(response.data.result +`${ss2}`)
            const embed = new MessageEmbed()
                .setTitle(`Tỉ giá tự động cập nhật sau mỗi giờ! Hôm nay ${response.data.date}`)
                .addField("Giá trị trước khi đổi: ", `${ss3}`+` ${ss}`)
                .addField("Giá trị sau khi đổi: ", response.data.result + ` ${ss2}`)
                .setFooter("Kết quả chỉ mang tính chất tham khảo.");
            message.channel.send(embed)

        }).catch(function (error) {
            console.error(error);
        });

        // message.channel.send(`${ss} \n ${ss2} \n ${ss3}`)
        //     message.channel.send(`${ss} \n ${ss2} \n ${ss3}`)
    }
}