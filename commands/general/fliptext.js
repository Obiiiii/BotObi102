const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
const flipText = require('../../assets/json/fliptext.json');

module.exports = {
    name: 'fliptext',
    aliases: [],
    category: 'general',
    usage: "<@tag>",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // try {
        //     if (!args.length) {
        //       return message.reply("Sữ dụng lènh bằng cách: `--flip <Text>`")
        //     }

        //     args = args.join(' ');
        //     for (let i = 0; i < Object.keys(flipText).length; i++) {
        //       args = args.replace(Object.keys(flipText)[i], flipText[Object.keys(flipText)[i]]);
        //     }

        //     const embed = new MessageEmbed()
        //         .setColor("RANDOM")
        //         .setTitle("__**ɟlᴉddǝp ʇǝxʇ:**__")
        //         .setDescription(args.split('').reverse().join(''))

        //     message.channel.send( {embed} );
        //     // message.channel.send(args.split('').reverse().join(''));
        // } catch (err) {
        //     return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
        // }



        var chars = require('../../assets/json/fliptext.json');

        Object.keys(chars).forEach(function (key) {
            var value = chars[key]
            if (!chars[value]) {
                chars[value] = key
            }
        })


        function flp(str) {
            var result = ''
                , c = str.length
                , ch = ''
            for (; c >= 0; --c) {
                ch = str.charAt(c)
                result += chars[ch] || chars[ch.toLowerCase()] || ch
            }
            return result
        }
        message.channel.send(flp(args.join(' ')));
        // message.channel.send(args.join(' '))

    }
}