const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('online', ()=> {
    client.user.setPresence({game:{name:"Taking back what's his", type:0}})
}
,client.on('message', msg => {

    if(msg.content === "nigger")
    msg.channel.send('PREACH!!!');
  
  if(msg.content === 'hello')
    msg.channel.send("I don't like you");

    if(msg.content === "yar")
    msg.channel.send(':luxGasm:');

    if(msg.content==="no")
    msg.channel.send('YOU CANNOT SILENCE THE SALVATION ARMY');

    if(msg.content === "league?")
    msg.channel.send('Imagine playing a trash game');

    if(msg.content === "wild")
    msg.channel.send('shut up, insolent fool');

    if(msg.content === "it be like that sometimes")
    msg.channel.send('it really do');

    if(msg.content === "kinky")
    msg.channel.send('https://cdn.discordapp.com/attachments/676785614770929664/708123803405910036/image0.jpg');

    if(msg.content === "Poggers")
    msg.channel.send('stop that');

    if(msg.content === "gay")
    msg.channel.send('I can arrange that.');

}));


client.login(process.env.BOT_TOKEN);
