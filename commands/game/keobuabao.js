
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
const discord = require('discord.js')
prefix = config.prefix;


module.exports = {
    name: 'rps',
    aliases: [],
    category: 'game',
    usage: "",
    description: 'Trò kéo búa bao với bot ',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // ??????
        // const acceptedReplies = ['rock', 'paper', 'scissors'];
        // const random = Math.floor((Math.random() * acceptedReplies.length));
        // const result = acceptedReplies[random];

        // const choice = args[0];
        // if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        // if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);

        // console.log('Bot Result:', result);
        // if (result === choice) return message.reply("It's a tie! We had the same choice.");

        // switch (choice) {
        //     case 'rock': {
        //         if (result === 'paper') return message.reply('I won!');
        //         else return message.reply('You won!');
        //     }
        //     case 'paper': {
        //         if (result === 'scissors') return message.reply('I won!');
        //         else return message.reply('You won!');        
        //     }
        //     case 'scissors': {
        //         if (result === 'rock') return message.reply('I won!');
        //         else return message.reply('You won!');
        //     }
        //     default: {
        //         return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        //     }
        // }
        //////////////////////////////////////////////

        // const emoji = client.emojis.cache.get("778896328822358017")
        // message.channel.send(`${message.author.username}`)

        let embed = new discord.MessageEmbed()
            .setTitle("Trò kéo, búa, bao")
            .setDescription("Chọn những biểu tượng để chơi!\n Sau 30s ko chọn Bot sẽ giận nghỉ chơi :))")
            .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("✊")
        await msg.react("✌️")
        await msg.react("🖐️")

        const filter = (reaction, user) => {
            return ['✊', '✌️', '🖐️'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['✊', '✌️', '🖐️']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, { max: 1, time: 30000, error: ["time"] }).then(
            async (collected) => {
                const reaction = collected.first()
                let result = new discord.MessageEmbed()
                    .setTitle("RESULT")
                    .addField("Your choice", `${reaction.emoji.name}`)
                    .addField("My choice", `${me}`)
                if ((me === "✊" && reaction.emoji.name === "✌️") ||
                    (me === "🖐️" && reaction.emoji.name === "✊") ||
                    (me === "✌️" && reaction.emoji.name === "🖐️")) {
                    // message.channel.send(`You won! \nAmazing good job em ${emoji}`);
                    message.channel.send(`You won! \nAmazing good job em `);
                } else if (me === reaction.emoji.name) {
                    return message.channel.send(`It's a tie! \n🤜🤛 \n ${message.author.username} 🤝 Bot`);
                } else {
                    return message.channel.send(`You lost! 🖕 Gà`);
                }
            })
            .catch(collected => {
                msg.delete();
                // message.reply('Process has been cancelled since you did not respond in time!');
            })
    }

}