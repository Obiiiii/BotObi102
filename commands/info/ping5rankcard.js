
// const { MessageEmbed } = require('discord.js');
// const Discord = require('discord.js');
// const fetch = require('node-fetch');



// const Discord = require("discord.js");
// const client = new Discord.Client();
// // const economy = require('../../levels')

// const { CanvasSenpai } = require("canvas-senpai")
// const canva = new CanvasSenpai();

// const {Collection, Client, Discord} = require('discord.js')
// const Discord = require("discord.js");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { welcome } = require('../../functions/canvasfunctionwc3');
// const { MessageAttachment } = require('discord.js');
// const { Collection, MessageEmbed, Client, MessageAttachment } = require("discord.js");
  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const discord = require("discord.js");

module.exports = {
    name: 'ping5',
    aliases: ['p5'],
    category: 'info',
    usage: "<@tag>",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // let member = message.mentions.users.first() || message.author

        // let avatar = member.displayAvatarURL({ format: 'jpg', dynamic: true, size: 1024 })

        // let data = await canva.rankcard(
        //     {
        //         link: "https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg",
        //         name: message.author.username,
        //         discriminator: message.author.discriminator,
        //         level: 10,
        //         rank: 6,
        //         currentXP: 679,
        //         fullXP: 1000,
        //         avatar: message.author.displayAvatarURL({ format: "png" })
        //         //   block: false

        //     })




        // const attachment = new Discord.MessageAttachment(
        //     data,
        //     "rank-image.png"
        // );

        // // message.channel.send(
        // //     ``,
        // //     attachment
        // // );


        // // message.channel.send(message.author.username + message.author.discriminator)

        // const channel = member.guild.channels.cache.get(channelId)
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        // avatar,
        // name,
        // discriminator,
        // currentXP,
        // fullXP,
        // level,
        // rank

        const image = await welcome(
            message.author.displayAvatarURL({ format: "png" }),
            message.author.username,
            message.author.discriminator,
            1000,
            1000,
            10,
            6
            );
        // const attachment = new MessageAttachment(image, 'welcome.png');
        const attachment = new discord.MessageAttachment(
            image,
            "welcome-image.png"
        );
        return message.channel.send(attachment);
    }
}