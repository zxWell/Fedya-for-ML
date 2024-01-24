const later = (delay, value) =>
    new Promise(resolve => setTimeout(resolve, delay, value));

module.exports = async (bot) => {

    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} серверов`, `${totalUsers} пользователей!` ], i = 0;
    setInterval(() => bot.user.setActivity(`help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),10000);

    bot.user.setStatus("idle");

    //const {Memory} = bot;
    const guildData = bot.guilds.cache.get("1184447509448368208");
    setInterval(() => {
        const channels = {
            0: bot.channels.cache.get("1188176662865645650"),
            1: bot.channels.cache.get("1188176717307719790"),
            //2: bot.channels.cache.get("1199738699286581388")
        };
        channels[0].setName("Участников: " + guildData.memberCount);
        channels[1].setName("Ботов: " + guildData.members.cache.filter(user=>user.user.bot).size);
        //channels[2].setName("перфикс мл бота: " + Memory.guilds.prefix);
    }, 5000);

    console.log('\nэщкерге, увы\n')

    console.log(bot.Memory.console);
    //console.log(bot.Memory.consoleClear);

    /*const collors = ["#FF0000", "#00FF00", "#FF1493"]; //Запрещено дискордом!
    let n = 1;
    const role = await bot.guilds.cache.get("899200433552252989").roles.fetch("913442305153855518");
    setInterval(() => {
        if(collors.length == n) n = 0;
        role.setColor(collors[n]);
        n++;
    }, 60000);
    role.setColor(collors[0]);*/

    /*const guild = bot.Memory.guilds.get("899200433552252989");
    guild.clearData; //Извлекает копию данных гильдии
    //или
    bot.Memory.guilds.clearData; //Извлекает копию всех данных гильдии в памяти
    guild.cache; //Получает кэш раздора этой гильдии
    await guild.fetch(); //Ищет эту гильдию в discord
    guild.update("name"); //Обновляет / сбрасывает определенный ключ настройки до значения по умолчанию (заданного схемой)
    //или
    bot.Memory.guilds.update("name"); //Обновляет / сбрасывает определенный ключ для всех гильдий в памяти*/

    const commandsIT = bot.application.commands; 
    await commandsIT.fetch(); //Найти все команды

    for (const command of bot.commands.any) {
        if(command.interaction) { //Если слэш команда есть
            const interaction = await commandsIT.cache.find(com=>com.name == command.interaction.name); //Найти команду в боте по названию
            if(!interaction) { //Если команда не была найдена в боте
                commandsIT.create(command.interaction); //Создать команду
            } else  //Если команда есть
            if(JSON.stringify(interaction.options) !== JSON.stringify(command.interaction.options)) {//И параметры команды не совпадают (т.е. команда была изменена)
                interaction.edit(command.interaction); //Редактируем эту команду
            }
        }
    }

    for (const interaction of commandsIT.cache) {
        const command = bot.commands.any.find(el=>el.names.includes(interaction.name));
        if(!command&&interaction.delete) interaction.delete();//Если команды нет - удалить слэш команду
    } 
};
