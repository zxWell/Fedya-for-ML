const Discord = require('discord.js');
const fs = require('fs');
module.exports = (bot, message) => {

    // if(message.author.bot) return;
    const {content, author, guild} = message;

    bot.commands = new Discord.Collection(); //Коллекция команд
    bot.commands.any = []; //Корекция дополнительных путей

    const commandFiles = fs.readdirSync('./commands'); //Список файлов команд

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        for (const name of command.names) bot.commands.set(name, command); //Коллекция команд
        bot.commands.any.push(command); //Доп. путь
    }

    /*const User = await bot.Users.findOne({id: author.id}); //Создание новой записи в DB
    console.log(User);
    if(User == null) {
        const newUser = new bot.Users({
            id: author.id,
            username: author.username
        });
        newUser.save();
    }*/


    // if(!bot.Memory.users[author.id]) bot.Memory.users[author.id] = bot.createUser(message);
    // if(guild) {
    //     if(!bot.Memory.guilds[guild.id]) bot.Memory.guilds[guild.id] = bot.createGuild(message);
    //     if(!bot.Memory.guilds[guild.id].members[author.id]) bot.Memory.guilds[guild.id].members[author.id] = bot.createMember(message);
    // }

    if(content == ".tex") bot.tex = !bot.tex;


    // if(!bot.Memory.guilds.get(guild.id)) return;
    // if(content.slice(0, bot.Memory.guilds.get(guild.id).prefix.length) !== bot.Memory.guilds.get(guild.id).prefix) return;
    
    const 
        messageArray = content.split(' '), 
        command = messageArray[0].replace(bot.Memory.guilds[guild.id].prefix, ""),
        args = messageArray.slice(1), 
        messageArrayFull = content.split(' '), 
        argsF = messageArrayFull.slice(1),
	    commandRun = bot.commands.get(command);

    if(commandRun) {
        if(bot.tex) return message.reply("Бот на тех обслуживании");
        commandRun(bot,message,args,argsF)
        .catch(err => console.error(err));
        //.then(any => console.log(any))
    } 
    
};