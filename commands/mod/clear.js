  
const { MessageEmbed } = require('discord.js');

const idObi = '482141830713049098' 
const idNhuy = '767782043986690118'
const idHiyuu = '482141830713049098'
const idBich = '727537156968546334'
const idNhuy2 = '780754773351727145'

module.exports = {
    name : 'clear',
    aliases : [],
    category : 'mod',
    usage: "<Số dòng muốn xóa>",
    description : 'Xóa tin nhắn trong kênh',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

        const { member, mentions } = message

        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);

        let deleteAmount;

        if(member.id === idNhuy || member.id === idBich || member.id === idHiyuu || member.id === idNhuy2){
            if (isNaN(args1[0]) || parseInt(args1[0]) <= 0) { return message.reply('Please put a number only!') }

            if (parseInt(args1[0]) > 100) {
                return message.reply('You can only delete 100 messages at a time!')
            } else {
                deleteAmount = parseInt(args1[0]);
            }

            message.channel.bulkDelete(deleteAmount + 1, true);
            message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
        }

    }
}