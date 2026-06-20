require("dotenv").config();

const {TOKEN} = process.env;

const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents: []
});

client.once("clientReady", ()=>{
    console.log(`${client.user.username} is online! :)`);
});

client.login(TOKEN);