
// const { MessageEmbed } = require('discord.js');
const { MessageEmbed, MessageAttachment } = require('discord.js')
const { readdirSync, readFileSync } = require('fs');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
const { getMember } = require('../../functions/utils');

module.exports = {
    name: 'slap',
    aliases: [''],
    category: 'img',
    usage: "<@tag>",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // const folder = readdirSync("././assets/imgeedit/slap/");
        // const file = readFileSync(`././assets/imgeedit/slap/${folder[Math.floor(Math.random() * folder.length)]}`);
        // const attachment = new MessageAttachment(file, 'slap.gif');
        // const nguoitag = await getMember(message, args.join(' '));

        // const folder = readdirSync("././assets/slap");
        // const file = readFileSync(`././assets/slap/${folder[Math.floor(Math.random() * folder.length)]}`);
        // const attachment = new MessageAttachment(file, 'slap.gif');
        // const nguoitag = await getMember(message, args.join(' '));

        // const { guild } = message
        // const user12 = message.mentions.users.first() || message.member.user
        // const member1 = guild.members.cache.get(user12.id)

        // const folder = readdirSync("././assets/slap");
        // const randomFile = folder[Math.floor(Math.random() * folder.length)];
        // const file = readFileSync(`././assets/slap/${randomFile}`);
        // const ext = randomFile.slice(-3);
        // const attachment = new MessageAttachment(file, `slap.${ext}`);
        // const nguoitag = await getMember(message, args.join(' '));

        // const lang = message.content.slice(prefix.length).trim().split(' ');
        // let lang123 = lang[2]
        // let b123 = lang123


        // let messageArray = message.content.split(" ");
        // let args1 = messageArray.slice(1);
        // // let cmd = messageArray[0];
        // var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1[0]));

        // const embed = new MessageEmbed()
        //     .attachFiles(attachment)
        //     // .setImage('attachment://slap.gif');
        //     // .attachFiles(attachment)
        //     .setImage(`attachment://slap.${ext}`)


        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        // const nguoibitag = await getMember(message, args.join(' '));
        const nguoitag = await getMember(message, args.join(' '));


        const folder = readdirSync("././assets/slap/");
        const file = readFileSync(`././assets/slap/${folder[Math.floor(Math.random() * folder.length)]}`);
        const attachment = new MessageAttachment(file, `slap.gif`);

        const embed = new MessageEmbed()
            .attachFiles(attachment)
            .setImage(`attachment://slap.gif`)
            // .setFooter('Nguồn: ');


        // message.channel.send(`${user} đã Táp vỡ mồm ${member.username} \n `+embed);
        // embed.setDescription(`${message.member} đã tát vỡ mồm ${nguoibitag} 🤚`);
        if (nguoitag === message.member) {
            embed.setDescription(`${message.member} đã tự vả chính mình 🤚`);
            embed.setFooter('Ngu Ngu Ngu Ngu Ngu hết phần thiên hạ')
        } 

        else{
            embed.setDescription(`${message.member} đã tát vỡ mồm ${nguoitag} 🤚~~`);
            embed.setFooter(`Táp vào đàu mày Táp vào não mày và || Táp vào tim cậu ||`)
        }


        message.channel.send(embed);
        // message.channel.send(`${user.tag}`);


    }
}