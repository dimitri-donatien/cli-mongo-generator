# CLI

My Node CLI is a tool for doing awesome things directly from your terminal.

## Installation

```bash
npm install -g auto-doc
```

## Usage

To start using My Node CLI, run:

```bash
auto-doc --help
```

### Commands

- `auto-doc -`: Greets you by your name.
- `auto-doc option1`: Executes option 1.

For more detailed information on commands, run `auto-doc --help`.

## Project Structure

```md
auto-doc/
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

## Contributing

Contributions are welcome ...

## License

This project is licensed ...
