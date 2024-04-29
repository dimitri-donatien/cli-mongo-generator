#!/usr/bin/env node
import { Command } from 'commander';
import figlet from 'figlet';

import { startCommand } from '../src/commands/start';

// Définir les commandes et options de l'application CLI
const program = new Command();

program.version('1.0.0').description('CLI MongoDB Creator');

// Commande principale
program.command('start').description('Démarre l\'application CLI').action(startCommand);

// Analyser les arguments de la ligne de commande
program.parse(process.argv);

if (!process.argv.slice(2).length) {
    console.log(figlet.textSync('CLI MongoDB Creator', { horizontalLayout: 'full' }));
    program.outputHelp();
}
