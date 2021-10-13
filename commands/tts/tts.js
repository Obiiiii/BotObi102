const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");

module.exports = {
    name: 'say',
    aliases: [],
    category: 'tts',
    usage: "<@tag>",
    description: 'text to speech',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        const broadcast = client.voice.createBroadcast();
        var channelId = message.member.voice.channelID;
        var channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            // broadcast.play(discordTTS.getVoiceStream("Chào uyên ú và tôi là Bot 123 132 123 123 132 132 "));
            broadcast.play(discordTTS.getVoiceStream(args.join()));
            const dispatcher = connection.play(broadcast);
            
        });
        // console.log(message.user.username)
        console.log(`${message.author.tag} log test to speech`)

    }
}