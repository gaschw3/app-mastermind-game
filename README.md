# Hack.EXE

An online version of a password cracking game somewhere between [Wordle](https://www.nytimes.com/games/wordle/index.html) and [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)).

Help is available in the game by clicking the Help button in the top right
corner.

Originally cloned from [Lixquid](https://github.com/lixquid/app-mastermind-game) then altered somewhat to be usable for a D&D game.

## Features

- Customizable game settings:
    - Length of the code
    - Maximum amount for each digit
- Encode string to create sharable link
- Wordle-style highlighting

## Development

- Needs cleanup on the GameSetup screen since it's no longer digit-based.
- Could use a hinting system
- More metadata encoded and used when generating share links
    - Dovetails into hints - all digits vs alpha vs both, includes spaces or no, words vs random, etc.
- Some kind of timer or guess limiting mechanic

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

### Getting started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Start the development server: `yarn start`
4. Open http://localhost:1234 in your browser

Changes to the source files will be automatically reloaded in the browser.

### Building for production

1. Remove the `dist` folder: `rm -rf dist`
2. Build the project: `yarn build`
3. The production files will be in the `dist` folder
