// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', message => {
	console.log(`${message.author.tag} a envoyé "${message.content}" dans le channel ${message.channel.name}`);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);