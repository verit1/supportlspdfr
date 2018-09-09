const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDg4MzM4MTY2MjczNjcxMjA4.DnayzQ.FitygX_dmMdJQgD3Yn3Nr_CM1C0'

bot.registry.registerGroup('embedy', 'Embedy');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'pomoc')
    {
        message.channel.sendMessage('Hej ' + message.author + ', wszystkie potrzebne informacje znajdziesz na kanale #przywitanko, jeśli masz problem lub czegoś nie wiesz, sprawdź #podstawowe_rozwiązania');
    }
});

bot.on('ready', function(){
    console.log('Jestem gotowy, o panie mój');
})

bot.login(TOKEN);