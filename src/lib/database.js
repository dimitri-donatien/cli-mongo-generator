import chalk from 'chalk';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import ora from 'ora';

// Charger les variables d'environnement depuis un fichier .env
dotenv.config();

// Configuration de la base de données MongoDB
const mongoUrl = process.env.MONGODB_URL;

// Fonction pour se connecter à la base de données MongoDB
export async function connectToDatabase(dbName) {
    const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
    try {
        await client.connect();
        console.log(chalk.green('Connecté à la base de données MongoDB'));
        return client.db(dbName);
    } catch (error) {
        console.error(chalk.red('Erreur de connexion à la base de données MongoDB'));
        throw error;
    }
}

// Fonction pour insérer des données dans une collection de la base de données MongoDB
export async function insertData(db, collectionName, data) {
    const collection = db.collection(collectionName);
    const spinner = ora('Insertion des données dans la base de données en cours...').start();
    try {
        const result = await collection.insertMany(data);
        spinner.succeed(chalk.green(`Données insérées avec succès dans la collection ${collectionName}`));
        return result;
    } catch (error) {
        spinner.fail(chalk.red(`Erreur lors de l'insertion des données dans la collection ${collectionName}`));
        throw error;
    }
}