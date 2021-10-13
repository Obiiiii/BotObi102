  
const { MessageEmbed } = require('discord.js');
const { url } = require("inspector");
const fetch = require('node-fetch')

module.exports = {
    name : 'gifrandom',
    aliases : ['gifr'],
    category : 'img',
    usage: "",
    description : 'Cho ra những ảnh gif anime ngẫu nhiên',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // const lang = message.content.slice(prefix.length).trim().split(' ');
        // const lang123 = lang[1]
        const tenorAPI = 'LIVDSRZULELA'
    
    
        const info = fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=anime&limit=1`)
        .then(res => res.json())
        .then(json => message.channel.send(json.results[0].url))

    }
}