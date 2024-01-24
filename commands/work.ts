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
    var random = Math.floor(Math.random() * 11); // Объявление переменной random - она вычисляет случайное число от 1 до 3

    if (random == 1) {
        message.channel.send('- вы усердно работали и получили +45$'), memMember.money+=45
    } 

    else if (random == 2) {
        message.channel.send('- СТЕПУХАА!!! +2500$'), memMember.money+=2500
    } 
    
    else if (random == 3) {
        message.channel.send('- спиздил пенсию +158$'), memMember.money+=158
    } 

    else if (random == 4) {
        message.channel.send('- удачный стрим)) +100$'), memMember.money+=100
    } 

    else if (random == 5) {
        message.channel.send('- работа на заводе. ЗП +1600$'), memMember.money+=1600
    } 
    
    else if (random == 6) {
        message.channel.send('- вы получили травму в шахте и заплатили за лечение -15$'), memMember.money-=15
    }

    else if (random == 7) {
        message.channel.send('- вы получили легкую травму в шахте и заплатили за лечение -5$'), memMember.money-=5
    }
    
    else if (random == 8) {
        message.channel.send('- вы сломали оборудование -1500$'), memMember.money-=1500
    }

    else if (random == 9) {
        message.channel.send('- оплата жилья -700$'), memMember.money-=700
    }

    else if (random == 10) {
        message.channel.send('- самое время реманта вашей конуры -400$'), memMember.money-=400
    }

    var random2 = Math.floor(Math.random() * 100001); // Объявление переменной random - она вычисляет случайное число от 1 до 3

    if (random2 == 748) {
        message.channel.send('- твоя богатая, 98-и летняя милфа сдохла. Пенсия: +1000000$'), memMember.money+=1000000
    } 

        Memory.save();

    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }

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
