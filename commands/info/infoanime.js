  
const { MessageEmbed } = require('discord.js');
const { get } = require("request-promise-native");

module.exports = {
    name : 'infoanime',
    aliases : ['ia'],
    category : 'info',
    usage: "<Tên anime>",
    description : 'Tìm kiếm thông tin anime',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        if(!args.length) {
            return message.channel.send("Xin hãy cho tên anime")
        }
        //DEFINE OPTIONS
          
        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
            method: `GET`,
            headers: {
              'Content-Type': "application/vnd.api+json",
              'Accept': "application/vnd.api+json"
      
            },
            json: true
        }
    
        message.channel.send("Fetching The Info").then(msg => {
            get(option).then(body => {
            try {
              let embed = new MessageEmbed()
              .setTitle(body.data[0].attributes.titles.en)
              .setColor("RED")
              .setDescription(body.data[0].attributes.synopsis)
              .setThumbnail(body.data[0].attributes.posterImage.original)
              .addField("Ratings", body.data[0].attributes.averageRating)
              .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
              .setImage(body.data[0].attributes.coverImage.large)
              //try it
              
              
              message.channel.send(embed)
              msg.delete();
              
            } catch (err) {
              msg.delete();
               return message.channel.send("Không thể tìm anime");
                }

            }     
                             
        )})

    }
}