
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
prefix = config.prefix;

// const axios = require('axios');
// const axios = require("axios");
const axios = require('axios');
// import axios from "axios";


module.exports = {
  name: 'lovepoint',
  aliases: ['lp'],
  category: 'general',
  usage: "|<Tên Trai>|<Tên Gái>|",
  description: 'Trả về điểm tình yêu và câu trả lời',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {

    const type = message.content.slice(prefix.length).trim().split('|');
    const ss = type[1];
    const ss2 = type[2];
    const ss3 = type[3];
    // message.channel.send(type+'\n')
    // message.channel.send(ss +' <3 '+ ss2)
    // // message.channel.send(ss)


    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      // params: {fname: 'Lê Quang Trung', sname: 'Nguyễn Thảo Hân'},
      params: { fname: `${ss}`, sname: `${ss2}` },
      headers: {
        'x-rapidapi-key': '49867946c9msh3be5ab92ab926ccp1d7bd3jsn1803a1d5a908',
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      //   console.log(response.data);



      //thuật toán bắt đầu
      var size = 30
      var value = Number(response.data.percentage)
      var maxValue = 100
      const percentage = value / maxValue; // Calculate the percentage of the bar
      const progress = Math.round((size * percentage)); // Calculate the number of square caracters to fill the progress side.
      const emptyProgress = size - progress; // Calculate the number of dash caracters to fill the empty progress side.

      const progressText = '▇'.repeat(progress); // Repeat is creating a string with progress * caracters in it
      const emptyProgressText = '—'.repeat(emptyProgress); // Repeat is creating a string with empty progress * caracters in it
      const percentageText = Math.round(percentage * 100) + '%'; // Displaying the percentage of the bar

      // const bar = '```[' + progressText + emptyProgressText + ']' + percentageText + '```'; // Creating the bar
      const bar = '[' + progressText + emptyProgressText + ']' + percentageText + ''; // Creating the bar

      // message.channel.send('123' + bar)

      //thuật toán bắt đầu kết thúc

      message.channel.send(ss + ' <3 ' + ss2 + `\nĐiểm tình yêu: ${response.data.percentage}\n ${bar} \n` + response.data.result)
    }).catch(function (error) {
      console.error(error);
    });
  }
}