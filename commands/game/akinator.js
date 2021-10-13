// const discordTTS = require("discord-tts");
const { MessageEmbed } = require('discord.js');
// const Discord = require('discord.js');

// const { Aki } = require('aki-api');
// const { Aki, regions } = require('aki-api');
// const lang = require("../../util/lang");
// const { stripIndents } = require('common-tags');
// const { verify } = require('../../util/Util');


///
const { Aki } = require('aki-api');
const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"];
const isPlaying = new Set();
///

// const {
//     startAki,
//     endGame,
//     checkTime,
//     oldCollects,
//     text
// } = require("../../util/functionsAki")

// const coolDownList = new Set();

module.exports = {
    name: 'akinator',
    aliases: ['aki'],
    category: 'game',
    usage: "",
    description: 'Aki',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {

        // text = lang['en'];

        const region = 'en'

        // message.channel.send(args[0])

        // if (args[0] == 'start') {

        //     if (coolDownList.has(message.author.id)) return;
        //     else {
        //         coolDownList.add(message.author.id);
        //         if (oldCollects[message.author.id]) {
        //             message.reply(text.openGame);
        //             return coolDownList.delete(message.author.id);
        //         }

        //         if (!message.channel.memberPermissions(message.guild.me).has(['ADD_REACTIONS', 'SEND_MESSAGES'])) {
        //             coolDownList.delete(message.author.id);
        //             try {
        //                 message.channel.send(text.noPerm);
        //                 message.author.send(text.noPerm)
        //             } catch (err) {
        //                 //lol
        //             };
        //             return;
        //         }


        //         var akiMsg = await message.channel.send(text.wait1)
        //         startAki(message, akiMsg);

        //         setTimeout(() => {
        //             coolDownList.delete(message.author.id);
        //         }, 5000);
        //     }

        // } else if (args[0] == 'stop') {
        //     if (!oldCollects[message.author.id]) return message.reply(text.noGame);
        //     endGame(message.author.id, oldCollects[message.author.id].akiMsg)
        // }


        /////

        // const current = this.client.games.get(msg.channel.id);
        // if (current) return msg.reply(`Please wait until the current game of \`${current.name}\` is finished.`);

        // try {
        //     const aki = new Aki(region, !message.channel.nsfw);
        //     let ans = null;
        //     let win = false;
        //     let timesGuessed = 0;
        //     let guessResetNum = 0;
        //     let wentBack = false;
        //     let forceGuess = false;
        //     const guessBlacklist = [];
        //     // this.client.games.set(message.channel.id, { name: this.name });
        //     while (timesGuessed < 3) {
        //         if (guessResetNum > 0) guessResetNum--;
        //         if (ans === null) {
        //             await aki.start();
        //         } else if (wentBack) {
        //             wentBack = false;
        //         } else {
        //             try {
        //                 await aki.step(ans);
        //             } catch {
        //                 await aki.step(ans);
        //             }
        //         }
        //         if (!aki.answers || aki.currentStep >= 79) forceGuess = true;
        //         const answers = aki.answers.map(answer => answer.toLowerCase());
        //         answers.push('end');
        //         if (aki.currentStep > 0) answers.push('back');
        //         await message.channel.send(stripIndents`
        // 			**${aki.currentStep + 1}.** ${aki.question} (${Math.round(Number.parseInt(aki.progress, 10))}%)
        // 			${aki.answers.join(' | ')}${aki.currentStep > 0 ? ` | Back` : ''} | End
        // 		`);
        //         const filter = res => res.author.id === message.author.id && answers.includes(res.content.toLowerCase());
        //         const messages = await message.channel.awaitMessages(filter, {
        //             max: 1,
        //             time: 90000
        //         });
        //         if (!messages.size) {
        //             await message.channel.send('Sorry, time is up!');
        //             win = 'time';
        //             break;
        //         }
        //         const choice = messages.first().content.toLowerCase();
        //         if (choice === 'end') {
        //             forceGuess = true;
        //         } else if (choice === 'back') {
        //             if (guessResetNum > 0) guessResetNum++;
        //             wentBack = true;
        //             await aki.back();
        //             continue;
        //         } else {
        //             ans = answers.indexOf(choice);
        //         }
        //         if ((aki.progress >= 90 && !guessResetNum) || forceGuess) {
        //             timesGuessed++;
        //             guessResetNum += 10;
        //             await aki.win();
        //             const guess = aki.answers.filter(g => !guessBlacklist.includes(g.id))[0];
        //             if (!guess) {
        //                 await message.channel.send('I can\'t think of anyone.');
        //                 win = true;
        //                 break;
        //             }
        //             guessBlacklist.push(guess.id);
        //             const embed = new MessageEmbed()
        //                 .setColor(0xF78B26)
        //                 .setTitle(`I'm ${Math.round(guess.proba * 100)}% sure it's...`)
        //                 .setDescription(stripIndents`
        // 					${guess.name}${guess.description ? `\n_${guess.description}_` : ''}
        // 					_**Type [y]es or [n]o to continue.**_
        // 				`)
        //                 .setThumbnail(guess.absolute_picture_path || null)
        //                 .setFooter(forceGuess ? 'Final Guess' : `Guess ${timesGuessed}`);
        //             await message.embed(embed);
        //             const verification = await verify(message.channel, message.author);
        //             if (verification === 0) {
        //                 win = 'time';
        //                 break;
        //             } else if (verification) {
        //                 win = false;
        //                 break;
        //             } else if (timesGuessed >= 3 || forceGuess) {
        //                 win = true;
        //                 break;
        //             } else {
        //                 await message.channel.send('Hmm... Is that so? I can keep going!');
        //             }
        //         }
        //     }
        //     // this.client.games.delete(message.channel.id);
        //     if (win === 'time') return message.channel.send('I guess your silence means I have won.');
        //     if (win) return message.channel.send('Bravo, you have defeated me.');
        //     return message.channel.send('Guessed right one more time! I love playing with you!');
        // } catch (err) {
        //     // this.client.games.delete(message.channel.id);
        //     return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        // }



        ////2

        if (isPlaying.has(message.author.id)) {
            return message.channel.send(":x: | The game already started..");
        }
        isPlaying.add(message.author.id);

        const aki = new Aki("en"); // Full languages list at: https://github.com/jgoralcz/aki-api

        await aki.start();

        const msg = await message.channel.send(new MessageEmbed()
            .setTitle(`${message.author.username}, Question ${aki.currentStep + 1} (${Math.round(Number.parseInt(aki.progress, 10))}%)`)
            .setColor("RANDOM")
            .setDescription(`**${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`));

        for (const emoji of emojis) await msg.react(emoji);

        const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id, {
            time: 60000 * 6
        });

        collector
            .on("end", () => isPlaying.delete(message.author.id))
            .on("collect", async ({
                emoji,
                users
            }) => {
                users.remove(message.author).catch(() => null);

                if (emoji.name == "❌") {
                    message.channel.send('Game Stop')
                    return collector.stop();
                }

                await aki.step(emojis.indexOf(emoji.name));

                if (aki.progress >= 70 || aki.currentStep >= 78) {

                    await aki.win();

                    collector.stop();

                    message.channel.send(new MessageEmbed()
                        .setTitle("Is this your character?")
                        .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\nRanking as **#${aki.answers[0].ranking}**\n\n[yes (**y**) / no (**n**)]`)
                        .setImage(aki.answers[0].absolute_picture_path)
                        .setColor("RANDOM"));

                    const filter = m => /(yes|no|y|n)/i.test(m.content) && m.author.id == message.author.id;

                    message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000 * 6,
                        errors: ["time"]
                    })
                        .then(collected => {
                            const isWinner = /yes|y/i.test(collected.first().content);
                            message.channel.send(new MessageEmbed()
                                .setTitle(isWinner ? "Great! Guessed right one more time." : "Uh. you are win")
                                .setColor("RANDOM")
                                .setDescription("I love playing with you!"));
                        }).catch(() => null);

                } else {
                    msg.edit(new MessageEmbed()
                        .setTitle(`${message.author.username}, Question ${aki.currentStep + 1} (${Math.round(Number.parseInt(aki.progress, 10))}%)`)
                        .setColor("RANDOM")
                        .setDescription(`**${aki.question}**\n${aki.answers.map((an, i) => `${an} | ${emojis[i]}`).join("\n")}`));
                }
            });

    }
}