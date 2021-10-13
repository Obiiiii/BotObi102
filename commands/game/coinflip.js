const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const coins = {
    heads: 'https://i.imgur.com/yStXPCV.png',
    tails: 'https://i.imgur.com/kSteyPc.png'
}

module.exports = {
    name: 'coinflip',
    aliases: [],
    category: 'game',
    usage: "",
    description: 'Coin flip',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        const sides = ['heads', 'tails']
        const chosenSide = sides[Math.floor(Math.random() * sides.length)]
        // const embed = new SwitchbladeEmbed(author)
        message.channel.startTyping()


        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Coin flip \n ${message.author.tag}`)
            .setDescription('Ra mặt '+ chosenSide)
            .setThumbnail(coins[chosenSide])
            // .setFooter(`🎰 ${result}`)
        await message.channel.send({ embed }).then(() => message.channel.stopTyping());


        // embed.setDescription(t('commands:coinflip.landed', { chosenSide }))
        //     .setThumbnail(coins[chosenSide])
        // message.channel.send(embed).then(() => channel.stopTyping())

    }
}