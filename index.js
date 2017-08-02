const commando = require("discord.js-commando");
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login("MzQyMTUzNDM0MDk2NzMwMTIy.DGOS1g.zrG3cMv87eIpLeg41Gm7L7cnUd8");
