
const { MessageEmbed } = require('discord.js');
const idNhuy = '767782043986690118'
const idObi = '482141830713049098'
const idHiyuu = '367284843819827201'
const momment = require('moment')

module.exports = {
    name: 'setnickname',
    aliases: ['setnn'],
    category: 'mod',
    usage: "<@tag> <nick name set>",
    description: 'Đổi biệt danh của 1 ai đó',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        const { member, mentions } = message
        // if (!message.member.hasPermission('MANAGE_NICKNAMES') && message.author.id !== ownerID) return message.reply("Bạn cần có quyền `\ MANAGE_NICKNAMES `\ để có thể đổi nickname.");
        if (member.id === idNhuy || member.id === idObi || member.id === idHiyuu) {
            const { guild, channel } = message

            const user12 = message.mentions.users.first() || message.member.user
            const member = guild.members.cache.get(user12.id)

            let nick = args.slice(1).join(" ");
            if (!args[0]) return message.reply(`Tag một người nào đó`);

            const status = await member.setNickname(nick)
                .catch(e => {
                    return e;
                });


            if (status.code == 50013) return message.channel.send(`Tôi không có quyền đổi nickname cho người này!`);
            if (status.message && status.name) return message.channel.send(`Lỗi: ${status.name}, ${status.message}`);
            message.channel.send(`Set nickname thành công cho ${user12} thành **${nick}**`)

        }


    }
}