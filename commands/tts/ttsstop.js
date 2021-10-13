const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const { disconnect } = require("process");
const config = require("../../config.json");

module.exports = {
    name: 'stop',
    aliases: [],
    category: 'tts',
    usage: "",
    description: 'Tắt Bot text to speech',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // client.leaveVoiceChannel(message.member.voiceState.channelID);
        // message.channel.send(`Thanks for tuning in!`); 

        const broadcast = client.voice.createBroadcast();
        var channelId = message.member.voice.channelID;
        var channel = client.channels.cache.get(channelId);
        channel.leave();

    }
}