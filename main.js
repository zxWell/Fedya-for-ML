const Discord = require('discord.js'),
    fs = require('fs'),
    config = require('./config.json');
config.bruh.intents = new Discord.Intents(config.bruh.intents);

const bot = new Discord.Client(config.bruh);
bot.login(config.token);

require('./events')(bot);

bot.commands = new Discord.Collection();
bot.commands.any = [];

const DiscordDB = require('simple-discord.db');
bot.Memory = new DiscordDB("Memory", bot);
