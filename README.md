# CLI

My App CLI is a command line application (CLI) for retrieving data from an API and inserting it into a MongoDB database.

## Packages used

[axios](https://www.npmjs.com/package/axios) - To make HTTP requests to the API.
[chalk](https://www.npmjs.com/package/chalk) - To style messages in the console.
[command](https://www.npmjs.com/package/commander) - To create command line applications.
[dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from an .env file.
[figlet](https://www.npmjs.com/package/figlet) - To generate ASCII text art.
[inquirer](https://www.npmjs.com/package/inquirer) - To facilitate user interaction in the console.
[mongodb](https://www.npmjs.com/package/mongodb) - The official driver for MongoDB.
[ora](https://www.npmjs.com/package/ora) - To display a loading indicator in the console.

## Installation

```bash
npm install -g cli-mg

cli-mg start
```

or

```bash
git clone https://github.com/dimitri-donatien/cli-mongo-generator.git

cd cli-mongo-generator

cli-mg start
```

The app will guide you through the process of fetching data from an API and inserting it into a MongoDB database.

## Usage

To start using My Node CLI, run:

```bash
cli-mg --help
```

### Commands

- `cli-mg start`

The app will guide you through the process of fetching data from an API and inserting it into a MongoDB database.

For more detailed information on commands, run `cli-mg --help`.

## Project Structure

```md
cli-mg/
├─ bin/
│ └─ index.js
├─ src/
│ ├─ commands/
│ ├─ utils/
│ └─ lib/
├─ package.json
└─ README.md
```

- **bin** — is where your CLI’s lives. It’s what gets called when someone runs your CLI.

- **src/commands** — holds individual command files. This makes adding new commands or editing existing ones cleaner.

- **src/utils** — is for utility functions you might need across several commands, like formatting data.

- **src/lib** — could be where your core functionality resides, especially if your CLI interacts with APIs or performs complex logic.

## 🙇 Author

#### Dimitri Donatien

- Github: [@DimitriDonatien](https://github.com/dimitri-donatien)

## ➤ License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
