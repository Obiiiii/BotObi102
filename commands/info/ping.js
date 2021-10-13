  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;
apiipkey = config.apiipkey;
myip = config.myip;
const publicIP = require('public-ip');
// const ipgeolocation = process.env.IPGEOLOCATION;
const axios = require('axios');
// const { getPing } = require('../../functions/economy');

module.exports = {
    name : 'ping',
    aliases : ['p'],
    category : 'info',
    usage: "<@tag>",
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // const messageArray = message.content.split(' ');
        // const args1 = messageArray.slice(1);
        // const args2 = messageArray.slice(2);

        // const lang = message.content.slice(prefix.length).trim().split(' ');
        // const lang123 = lang[1]

        // message.channel.send(lang+`\n`+lang123)

        // const msg = await message.channel.send(`🏓 Pinging...`)
        // const embed = new MessageEmbed()
        //     .setTitle('Pong!')
        //     .setDescription(`WebSocket ping is ${client.ws.ping}MS\nMessage edit ping is ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
        //     await message.channel.send(embed)
        //     msg.delete()

        const msg = await message.channel.send(`🏓 Pinging....`);
        try {
            const myIP = await publicIP.v4();
            let data = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiipkey}&ip=${myip}`);
            // const mongoPing = await getPing();
            data = data.data;
            const response = await axios.get('https://srhpyqt94yxb.statuspage.io/api/v2/components.json');
            let api = response.data.components.filter(el => el.name == "API");
            api = api[0];
            const embed = new MessageEmbed()
                .addField('Độ trễ (bot):', `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`, true)
                .addField('Độ trễ (API): ', `${client.ws.ping}ms`, true)
                // .addField('Độ trễ (MongoDB): ', [
                //     `Read: ${mongoPing.read}ms`,
                //     `Write: ${mongoPing.write}ms`,
                //     `Avg: ${mongoPing.average}ms`,
                // ])
                .addField('Discord API status: ', api.status, true)
                .addField('Vị trí hosting: ', `${data.city}, ${data.state_prov}, ${data.country_code2}`, true);
            msg.edit('Pong! 🏓', embed);
        }
        catch(e) {
            console.log(e);
            return msg.edit(`Pong! \`${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\``);
        }
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args1[0]));

        let role = message.guild.roles.cache.find(role => role.name === "Girl");//790417562252476417
        // let role = message.guild.roles.cache.find(role => role.id === "790417562252476417");
        // member.roles.add(role.id);
        member.roles.remove(role.id);


    }
}