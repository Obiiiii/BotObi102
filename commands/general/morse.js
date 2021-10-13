const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const morse = require('morse');

module.exports = {
    name: 'morse',
    aliases: [],
    category: 'general',
    usage: "<encode | decode> <text>",
    description: 'Chuyễn đôi văn bản thành mã morse và ngược lại',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        const text = args.slice(1).join(" ");

        if (!args[0]) return message.channel.send("Unknown parameter. Please choose the method first, either decode or encode it.");

        let choice = ["encode", "decode"];
        if (!choice.includes(args[0].toLowerCase())) return message.channel.send("Unknown parameter. Please choose the method first, either decode or encode it.");

        if (!text) return message.channel.send("Please input some text.");
        if (text.length > 1024) return message.channel.send("Oww, that is way too much. The maximum character was 1,024.");

        // message.channel.send(args[0]+'=');

        if (args[0] === 'encode') {

            const encoded = morse.encode(text);

            return message.channel.send(encoded)
        }
        else if (args[0] === 'decode'){

            const decode = morse.decode(text);

            return message.channel.send(decode)
        }

    }
}