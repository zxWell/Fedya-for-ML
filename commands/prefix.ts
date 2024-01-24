//const {Permissions} = require('discord.js');
const config = require('../config.json');
module.exports = async (bot,message,args,argsF) => {

    const {Memory} = bot;

    // const channels = {
    //     2: bot.channels.cache.get("1199738699286581388")
    // }
    bot.channels.cache.get("1199738699286581388").setName("перфикс мл бота: " + bot.Memory.guilds[message.guild.id].prefix);

    if(message.author.bot) return;

    //const {Memory} = bot;

    /*if(!message.channel.permissionsFor(message.author).has(Permissions.ADMINISTRATOR)) {
        return message.reply("У тебя не достаточно прав");
    }*/

    if(argsF[0] === undefined) return (
        message.reply('prefix <новый префикс>')
    );

    // if(bot.Memory.guilds[message.guild.id].prefix === undefined || null) return(
    //    // message.reply(`Ваш префикс = undefined, соответственно, мы его сменили на "${config.prefix}"`),
    //     bot.Memory.guilds[message.guild.id].prefix = config.prefix
    // ), Memory.save();

    bot.Memory.guilds[message.guild.id].prefix = argsF[0].toLowerCase();

    return message.channel.send("Новый префикс: "+bot.Memory.guilds[message.guild.id].prefix), Memory.save();
    
};
module.exports.names = ["prefix"];