  
const { MessageEmbed } = require('discord.js');
const figlet = require('figlet');
module.exports = {
    name : 'join',
    aliases : [],
    category : 'game',
    usage: "",
    description : 'Join game where wolfe',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        

        const { member, mentions } = message

        let role = message.guild.roles.cache.find(role => role.name === "wolfia");//câm lặng and mute

        if (!role) return message.reply("Couldn't find the  role.")

        member.roles.add(role.id);

    }
}