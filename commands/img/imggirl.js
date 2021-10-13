  
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const API_URL = 'https://gxcl.info/api.php'
const fetch = require('node-fetch')
const link123 = 'gaixinhchonloc.com'

module.exports = {
    name : 'girl',
    aliases : ['g'],
    category : 'fun',
    usage: "",
    description : 'Ngẩu nhiên xuất hiện 1 cô gái cho bạn ngắm',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        // const { url }  = await fetch(`${API_URL}`).then(response => response.json());

        // message.channel.send(url);

        const info = fetch(`https://gxcl.info/api.php`)
        .then(res => res.json())
        // .then(json => message.channel.send(json.link)) 
        .then(json => message.channel.send({embed:{
            author: {
                name: message.author.tag,
                icon_url: message.author.avatarURL
            },
            color: 0xff0000,
            description: 'Girl beautifully',
            image: {
                url: json.link
            },
            footer: {
                text: 'Powered by gaixinhchonloc.com/',
                icon_url: 'https://64.media.tumblr.com/f3611576b9e7178f59f285ecf974517a/172c7a777ab87fdd-c5/s128x128u_c1/57b429ae8e4c8d0236732a0067b4e86cc334624c.jpg',
            },
        }}))

    }
}