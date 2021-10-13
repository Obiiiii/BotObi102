  
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const wiki = require('wikijs').default
const config = require("../../config.json");
prefix = config.prefix;

module.exports = {
    name : 'wiki',
    aliases : [],
    category : 'google',
    usage: "<vi> <text>",
    description : 'Tìm hiểu với Wiki',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {


        const lang = message.content.slice(prefix.length).trim().split(' ');
        const lang123 = lang[1]
    
        // const info = await wiki({ apiUrl: `https://${lang123}.wikipedia.org/w/api.php` })
        // .page(`${args.slice(1).join(' ')}`)
        // .then(page => page.info())
        // .then(console.log);
    
        // message.channel.send(`${args.slice(1).join(' ')} + \n${lang123}`)
    
    
    
        const info = await wiki({ apiUrl: `https://${lang123}.wikipedia.org/w/api.php` })
        .page(`${args.slice(1).join(' ')}`);
        const [thumbnail, description] = await Promise.all([
            info.mainImage(),
            info.summary()
          ])
    
          const embed = new Discord.MessageEmbed()
              .setDescription(description.slice(0).toString().substring(0, 2000) +'...')
              .setAuthor(`https://${lang123}.wikipedia.org`)
              .setColor('#F8AA2A')
              .setTitle(info.raw.title)
              .setURL(info.raw.fullurl)
              .setThumbnail(thumbnail)
    
            message.channel.send(embed)
        // message.channel.send(description.split('\n').slice(2).toString().substring(0, 2000) + '...')

    }
}