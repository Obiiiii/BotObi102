
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;

module.exports = {
    name: 'kick',
    aliases: [],
    category: 'mod',
    usage: "<@tag>",
    description: 'kick 1 ai đó',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {


        const idNhuy = '767782043986690118'
        const idObi = '482141830713049098'

        const { member, mentions } = message

        const tag = `<@${member.id}>`
        const target = mentions.users.first()

        if (member.id === idNhuy || member.id === idObi) {
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`${tag} That user has kicked`)
            } else {
                message.channel.send(`${tag} Please specify someone to kick.`)
            }
        }


    }
}