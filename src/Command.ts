// This file defines a type called SlashCommand which is a subtype of ChatInputApplicationCommandData (which represents a command that is sent)
// run property is function that is called when command is executed
// // we give this the client and interaction that should trigger the command so we can respond to the user

import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from 'discord.js';

export interface Command extends ChatInputApplicationCommandData {
    run: ( client: Client, interaction: BaseCommandInteraction ) => void;
}


