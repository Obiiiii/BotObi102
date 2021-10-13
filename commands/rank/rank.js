
// const { MessageEmbed } = require('discord.js');
const discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
const { welcome } = require('../../functions/canvasfunctionwc5');
const Levels = require("discord-xp");
// Levels.setURL("mongodb://localhost:27017/discordbotDB3"); // You only need to do this ONCE per process.
Levels.setURL("mongodb://localhost:27017/discordbotDB4");
// Levels.setURL("mongodb://localhost:27017/discordbotDB2");



module.exports = {
    name: 'rank',
    aliases: ['ra'],
    category: 'rank',
    usage: "<@tag>",
    description: 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // user.xp += xp;
        // user.level = Math.floor(0.1 * Math.sqrt(user.xp));
    
        // await user.save().catch(e => console.log(`Failed to append xp: ${e}`) );
    
        // (Math.floor(0.1 * Math.sqrt(user.xp -= xp)) < user.level);

        

        const target = message.mentions.users.first() || message.author; // Grab the target.

        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.
        
        // const xpneed = user.level * user.level * 100;
        // Math.floor() làm tròn
        const xpa1 = 0.1 * Math.sqrt(user.xp);
        const xpa2 =  Math.pow(xpa1, 2) * 100;
        
        
        const lva1 =  (Math.pow((user.level+1), 2) * 100);
        const expend = Math.floor(lva1)
        const xpneed1 = Math.floor(lva1 - xpa2);
        // Math.pow(12, 2) cân bậc 2
        const xpdf1 =  (Math.pow(user.level, 2) * 100);
        const xpdf2 = Math.floor(user.xp - xpdf1)

        const image = await welcome(
            target.displayAvatarURL({ format: "png" }),
            target.username,
            target.discriminator,
            user.xp,
            expend,
            user.level,
            1,
            xpdf2
            );
        // const attachment = new MessageAttachment(image, 'welcome.png');
        const attachment = new discord.MessageAttachment(
            image,
            "rank-image.png"
        );
         message.reply(attachment);

        message.channel.send(`> **${target.tag}** is currently level ${user.level} and exp ${user.xp}, you need exp up level ${xpneed1}, match up level exp ${expend}, exp rest next ${xpdf2}.`); // We show the level.

    }
}