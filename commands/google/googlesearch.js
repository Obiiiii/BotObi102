  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const request = require('node-superfetch');
const config = require("../../config.json");

module.exports = {
    name : 'google',
    aliases : ['gg'],
    category : 'google',
    usage: "<Nhập thông tin tìm kiếm>",
    description : 'Tìm kiếm với google',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

    let googleKey = config.googleKey;
    let csx = config.csx; // Search engine ID.
    // let googleKey = "AIzaSyDOLo2ynqMnTAwbYwv1NNYSVvhO1T738kc";
    // let csx = "808b7fca880cf9fc0"; // Search engine ID.
    let query = args.join(" ");
    let result;

    if (!query) return message.channel.send("Please enter the query.");

    href = await search(query);
    if (!href) return message.channel.send("Unknown search.");

    const embed = new Discord.MessageEmbed()
    .setTitle(href.title)
    .setDescription(href.snippet)
    .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null) // Sometimes, the thumbnail might be unavailable in variant site. Return it to null.
    .setURL(href.link)
    .setColor(0x7289DA)
    .setFooter("Powered by Google")

    return message.channel.send(embed);

    async function search(query) {
        const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
            key: googleKey, cx: csx, safe: "off", q: query
        });

        if (!body.items) return null;
        return body.items[0];
    }

    }
}