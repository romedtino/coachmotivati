/**
 * Assumptions:
 * You're using Node.js
 * You have npm i -S discord.js
 * You will update INSERT_TOKEN_HERE with your own bot token
 **/
const Discord = require("discord.js");
const client = new Discord.Client();


client.login("INSERT_TOKEN_HERE");


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
