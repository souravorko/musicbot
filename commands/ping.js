module.exports = {
  info: {
    name: "ping",
    description: "This command show you ping of bot :D",
    usage: "",
    aliases: ["pong"],
},
   run: async (client, message, args) => {
const Discord = require('discord.js')
//ping
            var states = "π’ Excellent";
            var states2 = "π’ Excellent";
            var msg = `${Date.now() - message.createdTimestamp}`;
            var api = `${Math.round(client.ws.ping)}`;
            if (Number(msg) > 70) states = "π’ Good";
            if (Number(msg) > 170) states = "π‘ Not Bad";
            if (Number(msg) > 350) states = "π΄ Soo Bad";
            if (Number(api) > 70) states2 = "π’ Good";
            if (Number(api) > 170) states2 = "π‘ Not Bad";
            if (Number(api) > 350) states2 = "π΄ Soo Bad";
    let pingEmbed = new Discord.MessageEmbed()
      pingEmbed.setThumbnail(message.client.user.displayAvatarURL())
      pingEmbed.setColor("#2F3136");
      pingEmbed.setDescription(`**Pongπ!**
      π±${client.user.username} Ping `);
      pingEmbed.addField("**Time Taken:**", `\`${msg + " ms πΆ | " + states}\``, true)
      pingEmbed.addField("**WebSocket:**", `\`${api + " ms πΆ | " + states2}\``, true)
      pingEmbed.setTimestamp();
      pingEmbed.setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`);
   message.channel.send(pingEmbed);
    
     
   }

};