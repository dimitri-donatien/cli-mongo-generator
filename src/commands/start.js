import figlet from 'figlet';
import inquirer from 'inquirer';
import chalk from 'chalk';

import { fetchData } from '../utils/api';
import { connectToDatabase, insertData } from '../lib/database';

// Fonction principale asynchrone
export async function startCommand() {
    console.log(chalk.yellow(figlet.textSync('CLI MongoDB Creator', { horizontalLayout: 'full' })));

    // Récupérer les informations de connexion à la base de données MongoDB
    const { dbName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'dbName',
            message: 'Nom de la base de données MongoDB :',
            default: 'test',
        },
    ]);

    // Récupérer le nom de la collection
    const { collectionName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'collectionName',
            message: 'Nom de la collection MongoDB :',
            default: 'myCollection',
        },
    ]);

    // Récupérer le lien de l'API
    const { apiLink } = await inquirer.prompt([
        {
            type: 'input',
            name: 'apiLink',
            message: 'Entrez le lien de l\'API :',
        },
    ]);

    // Demander à l'utilisateur s'il a besoin d'une clé API pour appeler l'API
    const { useApiKey } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'useApiKey',
            message: 'L\'API nécessite-t-elle une clé d\'API pour l\'accès ?',
            default: false,
        },
    ]);

    let apiKey;
    if (useApiKey) {
        // Récupérer la clé API si nécessaire
        const { apiKeyInput } = await inquirer.prompt([
            {
                type: 'input',
                name: 'apiKeyInput',
                message: 'Entrez votre clé API :',
            },
        ]);
        apiKey = apiKeyInput;
    }

    // Récupérer les données à partir de l'API
    const apiData = await fetchData(apiLink, apiKey);

    if (!apiData) {
        console.log(chalk.red('Aucune donnée récupérée de l\'API.'));
        return;
    }

    // Créer une connexion à la base de données MongoDB
    const db = await connectToDatabase(dbName);

    // Insérer les données dans la collection de la base de données MongoDB
    await insertData(db, collectionName, apiData);

    // Fermer la connexion à la base de données MongoDB
    await db.client.close();

    console.log(chalk.green('Terminé ! Les données ont été insérées dans la collection de la base de données MongoDB.'));
}