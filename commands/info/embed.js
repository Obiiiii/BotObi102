  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name : 'embed',
    aliases : [],
    category : 'info',
    usage: "",
    description : 'Dev use',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const logo =
    //   'https://yt3.ggpht.com/a-/AOh14GgD43Ka7oxkCrxPAXiIuY8-rG3Kb4h9dQuhulOH=s100-c-k-c0xffffffff-no-rj-mo'
      'https://media1.tenor.com/images/a7fca00bd7513302bed0dd2945777b4f/tenor.gif?itemid=17029076'

        const embed = new Discord.MessageEmbed()
        .setTitle('Example text embed')
        .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
        .setAuthor(message.author.username)
        .setImage(logo)
        .setThumbnail(logo)
        .setFooter('This is a footer')
        .setColor('#00AAFF')
        .addFields(
            {
            name: 'Field 1',
            value: 'Hello world',
            inline: true,
            },
            {
            name: 'Field 2',
            value: 'Hello world',
            inline: true,
            },
            {
            name: 'Field 3',
            value: 'Hello world',
            inline: true,
            },
            {
            name: 'Field 4',
            value: 'Hello world',
            }
        )

        message.channel.send(embed)

    }
}