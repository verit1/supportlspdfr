const commando = require('discord.js-commando');
const discord = require('discord.js');

class ChangelogCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'changelog',
            group: 'embedy',
            memberName: 'changelog',
            description: 'Ostatnie zmiany wprowadzone na serwerze'
        });
    }

    async run(message, args)
    {
        var myChangelog = new discord.RichEmbed()
            .setTitle("CHANGELOG 0.2")
            .addField("09.09.2018", [" :white_check_mark: Stworzono autorskiego bota na potrzeby serwera", " :white_check_mark: Aktywowano komendę /pomoc/ dzięki której bot odpowiada instrukcją", " :white_check_mark: Spisano listę rozwiązań podstawowych problemów napotykanych przez graczy"], true)
            .setColor(0x42f46b)
        message.channel.send(myChangelog);
    }
}

module.exports = ChangelogCommand;