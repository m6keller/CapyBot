import { Client } from "discord.js";
import config from "./config";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

export const client = new Client( { 
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]
} );

// ready( client );
// interactionCreate( client );

client.once( "ready", () => {
    console.log( "Bot ready" );
});

client.on( "interactionCreate", async interaction => {
    if( !interaction.isCommand()) return;
    const { commandName } = interaction;
    if( commandName === "ping" ) return interaction.reply("pong");
})

client.login( config.DISCORD_TOKEN );
