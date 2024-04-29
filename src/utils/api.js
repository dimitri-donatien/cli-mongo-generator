import chalk from 'chalk';
import axios from 'axios';
import ora from 'ora';

// Fonction pour récupérer les données à partir de l'API
async function fetchData(apiLink, apiKey) {
    const spinner = ora('Récupération des données depuis l\'API en cours...').start();
    try {
        const headers = apiKey ? { 'Authorization': `Bearer ${apiKey}` } : {};
        const response = await axios.get(apiLink, { headers });
        spinner.succeed(chalk.green('Données récupérées avec succès depuis l\'API'));
        return response.data ?? response.data.data ?? response.data.results ?? response.data.items ?? response.results ?? [];
    } catch (error) {
        spinner.fail(chalk.red(`Erreur lors de la récupération des données à partir de l'API : ${error.message}`));
        return null;
    }
}