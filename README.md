# Hack.EXE

An online version of a password cracking game somewhere between [Wordle](https://www.nytimes.com/games/wordle/index.html) and [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)).

Help is available in the game by clicking the Help button in the top right
corner.

Originally cloned from [Lixquid](https://github.com/lixquid/app-mastermind-game) then altered somewhat to be usable for my D&D game.

## Features

- Customizable game settings:
    - Length of the code
    - Types of puzzles (#, A-Z, both, full keyboard)
    - Uniqueness constraint
- Encode string to create sharable link (visit `...#encode` for the secret encoder shortcut)
- Wordle-style highlighting

## Development

- Could use a hinting system
- More metadata encoded and used when generating share links
    - Dovetails into hints - all digits vs alpha vs both, includes spaces or no, words vs random, etc.
- Some kind of timer or guess limiting mechanic

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- yarn (if you like it more, I just use the npm commands)
- gh-pages

### Getting started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open http://localhost:1234 in your browser

Changes to the source files will be automatically reloaded in the browser.

### Building for production

1. Remove the `dist` folder: `rm -rf dist`
2. Build the project: `npm run predeploy`
3. The production files will be in the `dist` folder
4. Build using gh-pages with `npm run deploy`, deploys to [https://gaschw3.github.io/app-mastermind-game/](github pages) if you have it set up

Potential weirdness around `--public-url /app-mastermind-game/` in package.json depending on how it's set up compared to the way I do mine.
