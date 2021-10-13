
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require("../../config.json");
const translate = require('translate-google')
prefix = config.prefix;

module.exports = {
    name: 'translate',
    aliases: ['tr'],
    category: 'google',
    usage: "<Ngôn ngữ bạn chọn chuyển thành> <Nhập câu bạn muốn chuyển>",
    description: `Hãy gõ ${prefix}tr để biết ngôn ngữ hổ trợ`,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {


        const args12 = message.content.slice(prefix.length).trim().split(' ');
        const args123 = args12[1];

        if(!args[0]) return message.channel.send('Google dịch hổ trợ \n auto: Automatic, af: Afrikaans, sq: Albanian, ar: Arabic, hy: Armenian, az: Azerbaijani, eu: Basque, be: Belarusian, bn: Bengali, bs: Bosnian, bg: Bulgarian, ca: Catalan, ceb: Cebuano, ny: Chichewa, zh-cn: Chinese Simplified, zh-tw: Chinese Traditional, co: Corsican, hr: Croatian, cs: Czech, da: Danish, nl: Dutch, en: English, eo: Esperanto, et: Estonian, tl: Filipino, fi: Finnish, fr: French, fy: Frisian, gl: Galician, ka: Georgian, de: German, el: Greek, gu: Gujarati, ht: Haitian Creole, ha: Hausa, haw: Hawaiian, iw: Hebrew, hi: Hindi, hmn: Hmong, hu: Hungarian, is: Icelandic, ig: Igbo, id: Indonesian, ga: Irish, it: Italian, ja: Japanese, jw: Javanese, kn: Kannada, kk: Kazakh, km: Khmer, ko: Korean, ku: Kurdish (Kurmanji), ky: Kyrgyz, lo: Lao, la: Latin, lv: Latvian, lt: Lithuanian, lb: Luxembourgish, mk: Macedonian, mg: alagasy, ms: Malay, ml: Malayalam, mt: Maltese, mi: Maori, mr: Marathi, mn: Mongolian, my: Myanmar (Burmese), ne: Nepali, no: Norwegian, ps: ashto, fa: Persian, pl: Polish, pt: Portuguese, ma: Punjabi, ro: Romanian, ru: Russian, sm: Samoan, gd: Scots Gaelic, sr: Serbian, st: Sesotho, sn: Shona, sd: Sindhi, si: Sinhala, sk: Slovak, sl: Slovenian, so: Somali, es: Spanish, su: Sudanese, sw: Swahili, sv: Swedish, tg: Tajik, ta: Tamil, te: Telugu, th: Thai, tr: urkish, uk: Ukrainian, ur: Urdu, uz: Uzbek, vi: Vietnamese, cy: Welsh, xh: Xhosa, yi: Yiddish, yo: Yoruba, zu: Zulu');

        translate(args.slice(1).join(' '), {to : `${args12[1]}`}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.reply('An error has occured')
            console.log(err)
        })

    }

}