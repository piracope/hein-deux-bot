// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!");
});

const MASTERLIST = [
	"hein",
	"hein ?",
	"hein?",
	"un",
];

client.on("messageCreate", message => {
	for (const word of MASTERLIST) {
		if (message.content.endsWith(word)) {
			message.reply("deux");
			return;
		}
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);