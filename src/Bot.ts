import { Client } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

const token = "OTQ0Njc2NzE0NDg5OTg3MDgy.YhFEvw.zA0EdT-XwvzzaR1JrSkwkcuf9QU";

console.log( "Bot is starting..." )

const client = new Client( { 
    intents: []
} );

ready( client );
interactionCreate( client );

client.login( token );