
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
dateformat = require('dateformat');
const momment = require('moment');
const flags = require('../../assets/json/userflag.json');
const logo =
  //   'https://yt3.ggpht.com/a-/AOh14GgD43Ka7oxkCrxPAXiIuY8-rG3Kb4h9dQuhulOH=s100-c-k-c0xffffffff-no-rj-mo'
  'https://media1.tenor.com/images/9835192c6f195f7d1feb19560f500a54/tenor.gif?itemid=17487110'

module.exports = {
  name: 'memberinfo',
  aliases: ['mi'],
  category: 'info',
  usage: "<@tag>",
  description: 'Xem thông tin của ai đó trong server',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {

    let isbot


    const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)


    // const member123 = await getMember(message, args.join(' '));
    let userFlags = "";
    if (member.user.flags) userFlags = member.user.flags.toArray();

    if (user.bot === false) {
      isbot = `Không phải Bot`
    }
    else {
      isbot = `Là 1 em Bot cute phô mai que`
    }

    console.log(member)

    //Playing ??
    function game() {
      let game;
      if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
      else if (user.presence.activities.length < 1) game = "None"; // This will check if the user doesn't playing anything.
      return game; // Return the result.
    }

    //Day and time
    let x = Date.now() - user.createdAt; // Since the user created their account.
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
    let created = Math.floor(x / 86400000); // 5 digits-zero.
    let joined = Math.floor(y / 86400000);

    let c1 = user.createdAt;

    let createdate = momment(user.createdAt).format("MM/DD/YYYY, HH:mm:ss"); // User Created Date
    let joindate = momment(member.joinedAt).format("MM/DD/YYYY, HH:mm:ss"); // User Joined the Server Date

    const embed = new MessageEmbed()
      .setAuthor(`Thông tin của ${user.username} \n ${user.id}`, user.displayAvatarURL())
      .setThumbnail(user.avatarURL({ size: 2048 }))
      .setColor("#e30569")
      .setImage(logo)
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },
        {
          name: 'Có phải là Bot',
          // value: user.bot,
          value: `${isbot}`,
        },
        {
          name: 'Biệt danh',
          value: member.nickname || 'None',
        },
        {
          name: 'Ngày tạo acc',
          // value: new Date(member.joinedTimestamp).toLocaleDateString(),
          value: `${createdate} \nCách đây ${created} day(s) trước`,
        },
        {
          name: 'Vào server từ',
          // value: new Date(user.createdTimestamp).toLocaleDateString(),
          value: `${joindate} \nCách đây ${joined} day(s) trước`,
        },
        {
          name: 'Trạng thái',
          value: `${user.presence.status}`,
        },
        {
          name: 'Game',
          value: `${game()}`,
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        },
        {
          name: 'Huy hiệu',
          // value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(", ") : "Không có" }`,
          value: `Tổng huy hiệu: ${userFlags.length} \n ${userFlags.length ? userFlags.map(flag => flags[flag]).join(", ") : "Không có"}`,
        },
        {
          name: '𝔗𝔥𝔦𝔢̂𝔫 𝔥𝔞̣ 𝔳𝔬̂ 𝔱ı̀𝔫𝔥, 𝔟𝔞̣𝔫 𝔳𝔬̛́𝔦 𝔱𝔲𝔦 𝔥𝔲̛̃𝔲 𝔱ı̀𝔫𝔥, 𝔵𝔦𝔫 𝔡𝔲̛̀𝔫𝔤 𝔱𝔞𝔶 𝔩𝔞̣𝔦 𝔠𝔥𝔬 𝔱𝔞̣𝔦 𝔥𝔞̣ đ𝔞̂𝔶 1 𝔵𝔦𝔫 𝔱𝔞́𝔠𝔥 𝔱𝔯𝔞̀ 𝔫𝔞̀𝔬',
          value: '** <@!727537156968546334> \n (っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ ) **',
        }
      )

    channel.send(embed)

  }
}