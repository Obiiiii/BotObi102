  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Parser = require('rss-parser')
const parser = new Parser()

module.exports = {
    name : 'nasa',
    aliases : [],
    category : 'info',
    usage: "",
    description : 'Xem thông tin mới nhất của Nasa',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {


        const feed = await parser.parseURL('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss')
        const item = feed.items[0]
    
        const embed = new Discord.MessageEmbed()
        .setAuthor('Nasa')
        .setThumbnail('https://i.imgur.com/bHmqqHL.jpg')
        .setTitle(item.title)
        .setURL(item.link)
        .setImage(item.enclosure.url)
        .setDescription(item.content)
        .setColor(0x0b3d91)
    
        message.channel.send(embed)

    }
}