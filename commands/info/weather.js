
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    aliases: ['wt'],
    category: 'info',
    usage: "<Địa điểm bạn muốn xem>",
    description: 'Xem thời tiết',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {


        weather.find({ search: args.join(" "), degreeType: 'F' }, function (error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (error) return message.channel.send(error);
            if (!args[0]) return message.channel.send('Please specify a location')

            if (result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("#e30569")
                .addField('Múi giờ', `UTC${location.timezone}`, true)
                .addField("Thời tiết", result[0].current.skytext, true)
                .addField('Thang nhiệt', 'Độ F', true)
                .addField('Nhiệt độ ', `${current.temperature}℉`, true)
                .addField("Tốc đọ gió", result[0].current.windspeed, true)
                .addField('Độ trể gió', current.winddisplay, true)
                .addField('Cảm nhận như', `${current.feelslike}℉`, true)
                .addField('Độ ẩm', `${current.humidity}%`, true)
                .addField("Thời gian quan sát", result[0].current.observationtime, true)


            message.channel.send(weatherinfo)
        })

    }
}