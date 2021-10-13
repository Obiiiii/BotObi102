
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
const Levels = require("discord-xp");
// Levels.setURL("mongodb://localhost:27017/discordbotDB3"); // You only need to do this ONCE per process.
// Levels.setURL("mongodb://localhost:27017/discordbotDB2");
Levels.setURL("mongodb://localhost:27017/discordbotDB4");

module.exports = {
    name: 'addlevel',
    aliases: ['al'],
    category: 'rank',
    usage: "<@tag> <xp>",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        // const { member123, mentions } = message

        let authorId = message.author.id;

        const lang = message.content.slice(prefix.length).trim().split(' ');
        let lang123 = lang[2]
        let b123 = lang123
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1[0]));
        const user = await Levels.fetch(member.id, member.guild.id); // Selects the target from the database.

        if (!user) return message.channel.send("Seems like this user has not earned any xp so far.");
        // Levels.appendXp(<UserID>, <GuildID>, <Amount>);
        const idObi = "482141830713049098" //482141830713049098 767782043986690118
        const idNhuy = "767782043986690118"
        const idBich = "727537156968546334"

        if (authorId === idObi || authorId === idNhuy) {
            Levels.appendLevel(member.id, message.guild.id, Number(b123));
            message.channel.send(`Đã tăng ${Number(b123)} level cho <@${member.id}>`);
        }
        else{
            message.channel.send(`sr bạn ko có quyền`);
        }

    }
}