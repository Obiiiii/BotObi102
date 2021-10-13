
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');

const momment = require('moment')
const moment = require('moment');
dateformat = require('dateformat');


const filterLevels = {
  DISABLED: 'Off',
  MEMBERS_WITHOUT_ROLES: 'No Role',
  ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
  NONE: 'None',
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
  VERY_HIGH: 'Highest'
};

const logo =
  //   'https://yt3.ggpht.com/a-/AOh14GgD43Ka7oxkCrxPAXiIuY8-rG3Kb4h9dQuhulOH=s100-c-k-c0xffffffff-no-rj-mo'
  'https://media1.tenor.com/images/9835192c6f195f7d1feb19560f500a54/tenor.gif?itemid=17487110'


module.exports = {
  name: 'infoserver',
  aliases: ['is'],
  category: 'info',
  usage: "",
  description: 'Xem thông tin server',

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {

    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
    let created = dateformat(message.guild.createdAt);
    let created1 = (message.guild.createdAt);

    // Members
    let member = message.guild.members;
    let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
      online = member.cache.filter(m => m.user.presence.status === "online").size,
      idle = member.cache.filter(m => m.user.presence.status === "idle").size,
      dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
      robot = member.cache.filter(m => m.user.bot).size,
      total = message.guild.memberCount;


    // Channels
    let channels = message.guild.channels;
    let text = channels.cache.filter(r => r.type === "text").size,
      vc = channels.cache.filter(r => r.type === "voice").size,
      category = channels.cache.filter(r => r.type === "category").size,
      totalchan = channels.cache.size;


    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Thông tin server của "${name}"\n**ID:** ${message.guild.id}`)
      .setThumbnail(icon)
      .setColor("#e30569")
      .setImage(logo)
      .addField(`Members [${total}]`, `Online: ${online} \nIdle: ${idle} \nDND(do not disturb): ${dnd} \nOffline: ${offline} \nBots: ${robot}`)
      .addField(`Kênh Channels [${totalchan}]`, `Văn bản: ${text} \nKênh âm thanh: ${vc} \nCategory: ${category}`)
      .addFields(
        {
          name: 'Khu vực',
          value: region,
        },
        {
          name: 'Số member',
          value: memberCount,
        },
        {
          name: 'Chủ',
          // value: owner.user.tag,
          // value: `<@!${message.guild.ownerID}>`,
          // value: `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
          value: `123`
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
        ,
        {
          name: 'Ngày tạo',
          // value: `${momment(message.guild.createAt).format("MM/DD/YYYY ,HH:mm:ss")} \n Ngày tạo **${h}** day(s)`,
          value: `${momment(created1).format("MM/DD/YYYY, HH:mm:ss")} \nCách đây **${h}** day(s)`,
        },
        {
          name: `𝔗𝔥𝔦𝔢̂𝔫 𝔥𝔞̣ 𝔳𝔬̂ 𝔱ı̀𝔫𝔥, 𝔟𝔞̣𝔫 𝔳𝔬̛́𝔦 𝔱𝔲𝔦 𝔥𝔲̛̃𝔲 𝔱ı̀𝔫𝔥, 𝔵𝔦𝔫 𝔡𝔲̛̀𝔫𝔤 𝔱𝔞𝔶 𝔩𝔞̣𝔦 𝔠𝔥𝔬 𝔱𝔞̣𝔦 𝔥𝔞̣ đ𝔞̂𝔶 1 𝔵𝔦𝔫 𝔱𝔞́𝔠𝔥 𝔱𝔯𝔞̀ 𝔫𝔞̀𝔬`,
          value: '** <@!727537156968546334> ** \n(っ＾▿＾)۶🍸🌟🍺٩(˘◡˘ )',
        }
      )


    // message.channel.send(embed)



    ///


    if (!message.guild.members.cache.has(message.guild.ownerID)) await message.guild.members.fetch(message.guild.ownerID);
    const embed1 = new MessageEmbed()
      .setColor(0x00AE86)
      .setThumbnail(message.guild.iconURL({ format: 'png' }))
      .addField('❯ Name', message.guild.name, true)
      .addField('❯ ID', message.guild.id, true)
      .addField('❯ Creation Date', moment.utc(message.guild.createdAt).format('MM/DD/YYYY h:mm A'), true)
      .addField('❯ Owner', message.guild.owner.user.tag, true)
      .addField('❯ Boost Count', message.guild.premiumSubscriptionCount || 0, true)
      .addField('❯ Boost Tier', message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None', true)
      .addField('❯ Region', message.guild.region.toUpperCase(), true)
      .addField('❯ Explicit Filter', filterLevels[message.guild.explicitContentFilter], true)
      .addField('❯ Verification Level', verificationLevels[message.guild.verificationLevel], true)
      .addField('❯ Members', message.guild.memberCount, true)
      .addField('❯ Roles', message.guild.roles.cache.size, true)
      .addField('❯ Channels', message.guild.channels.cache.filter(channel => channel.type !== 'category').size, true);
    message.channel.send(embed1);

  }
}