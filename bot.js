const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
      console.log('I am ready!');
});

client.on('message', message => {
      if(message.content === 'ping'){
         message.reply('pong');
    }
    
client.on('message', message => {
      if(message.content === 'Salam'){
         message.reply('Walaikum as Salam');
    }
   
});

bot.login(botLogin.token);
