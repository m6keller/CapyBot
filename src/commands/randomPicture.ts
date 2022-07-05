import { BaseCommandInteraction, Client, MessageEmbed } from "discord.js";
import { Command } from "../types";
// import { initializeApp } from 'firebase-admin/app';
import admin from "firebase-admin"
export const randomPicture: Command = {
  name: "Random Picture",
  description: "Random Capy Picture",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    
    const app = admin.initializeApp(
        credential: applicationDefault(),
        storage: `gs://capy-bot-storage.appspot.com`
    );


    const bucket = admin.storage().bucket();

    const files = await bucket.getFiles();

    const file = files[Math.floor(Math.random() * files.length)];
    const url = await file.getSignedUrl({ action: 'read', expires: '03-09-2491' });
    const embed = new MessageEmbed().setImage(url[0])
    interaction.followUp({ embeds: [embed] });
  },
};
