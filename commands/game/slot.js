const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");

module.exports = {
    name: 'slot',
    aliases: [],
    category: 'game',
    usage: "<@tag>",
    description: 'Game slot',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // let reel = [
        //     ':custard:',
        //     ':candy:',
        //     ':cake:',
        //     ':icecream:',
        //     ':lollipop:',
        //     ':chocolate_bar:',
        //     ':moneybag:',
        //     ':shaved_ice:',
        //     ':doughnut:',
        //     ':cookie:',
        //     ':ice_cream:'
        // ];




        // let reels = [];
        // for (let i = 0; i < 3; i++) {
        //     reels.push(reel[Math.floor(Math.random() * reel.length)]);
        // }

        // let result;
        // if (reels[0] === reels[1] && reels[1] === reels[2]) {
        //     result = 'Congratulations! You won.';
        // } else {
        //     result = 'Sorry, you lost. Better luck next time.';
        // }

        // const embed = new MessageEmbed()
        //     .setColor("RANDOM")
        //     .setTitle('Slot Machine')
        //     .setDescription(reels.join(' \u05C0 '))
        //     .setFooter(`🎰 ${result}`)
        // await message.channel.send({ embed });


        /// cheat onl

        let reel = [
            ':custard:',
            ':candy:',
            ':cake:',
            ':icecream:',
            ':lollipop:',
            ':chocolate_bar:',
            ':moneybag:',
            ':shaved_ice:',
            ':doughnut:',
            ':cookie:',
            ':ice_cream:'
        ];


        let reels = [];

        const hack = Math.floor(Math.random() * reel.length)
        const hack12 = Math.floor(Math.random() * 6)
        // message.channel.send(hack)



        const idNhuy = '767782043986690118'
        const idthanh = '482141830713049098'
        // const idQuynh = '791127798307487784'
        const idQuynh = '697046126968307752'

        let authorId = message.author.id;
        if (authorId === idNhuy || authorId === idthanh || authorId === idQuynh) {

            if (hack12 != 1) {

                for (let i = 0; i < 3; i++) {
                    reels.push(reel[Math.floor(Math.random() * reel.length)]);
                }

                let result;
                if (reels[0] === reels[1] && reels[1] === reels[2]) {
                    result = `Congratulations! You won.`;
                } else {
                    result = 'Sorry, you lost. Better luck next time.';
                }

                const embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Slot Machine \n ${message.author.tag}`)
                    .setDescription(reels.join(' \u05C0 '))
                    .setFooter(`🎰 ${result}`)
                await message.channel.send({ embed });

            }
            else {

                for (let i = 0; i < 3; i++) {
                    reels.push(reel[Number(hack)]);
                }
                let result;
                if (reels[0] === reels[1] && reels[1] === reels[2]) {
                    result = `Congratulations! You won.`;
                } else {
                    result = 'Sorry, you lost. Better luck next time.';
                }

                const embed = new MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle(`Slot Machine \n ${message.author.tag}`)
                    .setDescription(reels.join(' \u05C0 '))
                    .setFooter(`🎰 ${result}`)
                await message.channel.send({ embed });

            }
        }
        else {

            for (let i = 0; i < 3; i++) {
                reels.push(reel[Math.floor(Math.random() * reel.length)]);
            }

            let result;
            if (reels[0] === reels[1] && reels[1] === reels[2]) {
                result = 'Congratulations! You won.';
            } else {
                result = 'Sorry, you lost. Better luck next time.';
            }

            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`Slot Machine \n ${message.author.tag}`)
                .setDescription(reels.join(' \u05C0 '))
                .setFooter(`🎰 ${result}`)
            await message.channel.send({ embed });
        }


    }
}