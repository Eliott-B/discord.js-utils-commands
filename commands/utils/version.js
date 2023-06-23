const { SlashCommandBuilder } = require('discord.js');
const { informations } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('version')
        .setDescription('Bot version'),
    async execute(interaction) {
        await interaction.reply({ content: `${informations.version}`, ephemeral: true });
    },
};