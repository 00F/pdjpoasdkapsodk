const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['271739675759083520'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`. FủLiĨ "#1813`,'https://www.twitch.tv/MeeRcY')
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('3Wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('2Ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('1St')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
   message.channel.send(`${argresult} \` `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '712') {
  let channel = client.channels.get('444873938691031040');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
