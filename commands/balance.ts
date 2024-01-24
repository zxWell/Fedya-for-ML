module.exports = async (bot, message) =>{

    const {author,guild} = message;
    const {Memory} = bot;
    const memGuild = Memory.guilds.get(guild.id),
    memUser = Memory.users.get(author.id),
    memMember = memGuild.members.get(author.id);

    message.reply(`- Ваш счёт в банке: ${memMember.money}$`)

};
module.exports.names = ['bank', 'balance']