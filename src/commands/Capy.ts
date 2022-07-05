import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../types"

// when user types "/capy", this command will return something
export const Capy: Command = {
    name: "capy",
    description: "Returns a greeting",
    type: "CHAT_INPUT",
    run: async ( client: Client, interaction: BaseCommandInteraction ) => {
        const content = "capy :smiling_face_with_3_hearts:";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};