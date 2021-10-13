  
const { MessageEmbed } = require('discord.js');
const img = require('images-scraper');

module.exports = {
    name : 'imggooglesearch',
    aliases : ['imggg'],
    category : 'google',
    usage: "<Nhập vào để tìm>",
    description : 'Sử dụng tìm kiếm hình ảnh với reddit',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        message.channel.startTyping();

        const google = new img({
            puppeteer : {
                headless : true,
            }
        })
        
        const query = args.join(" ")
        if(!query) return message.channel.send('Please enter a search query')
    
        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);

        message.channel.stopTyping();

    }
}