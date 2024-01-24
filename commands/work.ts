module.exports = async (bot, message) =>{

    const {author,guild} = message;
    const {Memory} = bot;
    const memGuild = Memory.guilds.get(guild.id),
    memUser = Memory.users.get(author.id),
    memMember = memGuild.members.get(author.id);

    //memMember.cache == guild;
    //Memory.guilds.update("money");
    //memGuild.update("money");

    // for (const guild of Memory.guilds) {
        
    // }
    var random = Math.floor(Math.random() * (1001 - 1) + 1); // Объявление переменной random - она вычисляет случайное число от 1 до 1000

    var making_money = ["вы усердно работали и получили", "СТЕПУХАА!!!", "спиздил пенсию", "удачный стрим))", "работа на заводе. ЗП"];
    var loss_money = ["вы получили травму в шахте и заплатили за лечение",
     "вы получили легкую травму в шахте и заплатили за лечение",
      "вы сломали оборудование",
        "оплата жилья",
        "самое время реманта вашей конуры"];

    var loss_or_making = Math.floor(Math.random() * (2 - 0) + 0);
    var random_massege = Math.floor(Math.random() * (5 - 0) + 0);

    if (loss_or_making == 0) {
        message.channel.send("- " + loss_money[random_massege] + " -" + random + "$"), memMember.money-=random;
    } else {
        message.channel.send("- " + making_money[random_massege] + " +" + random + "$"), memMember.money+=random;
    }

    var random2 = Math.floor(Math.random() * 100001); // Объявление переменной random - она вычисляет случайное число от 1 до 3

    if (random2 == 748) {
        message.channel.send('- твоя богатая, 98-и летняя милфа сдохла. Пенсия: +1000000$'), memMember.money+=1000000
    } 

        Memory.save();

    exports.conf = {
        aliases: [],
        cooldown: "10"
    }

}

module.exports.names = ["work"];
module.exports.interaction = {
    name: "work",
    description: "жеска работать, бам-бам, бух-бух в шахте",
    type: "STRING",
    required: false,
    defaultPermission: true
};
