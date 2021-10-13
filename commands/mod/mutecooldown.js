
// const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const ms = require('ms')

module.exports = {
    name: 'mute',
    aliases: [],
    category: 'mod',
    usage: "<@tag>",
    description: 'Mute 1 ai đó ko dc chat',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {



        const idObi = '482141830713049098'
        const idNhuy = '767782043986690118'
        const idHiyuu = '367284843819827201'//727537156968546334
        const idBich = '727537156968546334'

        const { guild } = message
        const user12 = message.mentions.users.first() || message.member.user
        const member1 = guild.members.cache.get(user12.id)
        // message.channel.send(`${member1}`);
        let authorId = message.author.id;
        // message.channel.send(`${member1} ${authorId}`);

        let messageArray = message.content.split(" ");
        let args1 = messageArray.slice(1);
        // let cmd = messageArray[0];
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1[0]));
        if ( authorId == idObi) {
            
            if (!member) return message.reply('Please Provide a Member to TempMute.')


            let role = message.guild.roles.cache.find(role => role.name === "Muted");//câm lặng and mute
            // let role = message.guild.roles.cache.find(role => role.name === "câm lặng and mute");//câm lặng and mute
            // let role2 = message.guild.roles.cache.find(role => role.name === "new role");

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = args1[1];
            // message.channel.send(time)
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            // member.roles.remove(role2.id)

            member.roles.add(role.id);
            // member.roles.remove(role2)

            message.channel.send(`@${member.user.tag} đã bị mute trong ${ms(ms(time))}`)

            setTimeout(function () {
                // member.roles.add(role2.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} đã được thoát khỏi mute.`)
            }, ms(time));

            // //////////////////////////////////////
            // const split = message.split('')

            // const memberId = split[1]
            // const guildId = split[2]
            // // let messageArray = message.content.split(" ");
            // // let args1 = messageArray.slice(1);

            // const guild = client.guilds.cache.get(guildId)
            // const member = guild.members.cache.get(memberId)

            // const role = getRole(guild)

            // member.roles.remove(role)
        }
    }
}