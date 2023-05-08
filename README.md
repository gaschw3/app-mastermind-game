# [Mastermind](https://mastermind-game.lixquid.com)

An online version of the classic Mastermind game (also known as Bulls and Cows).

Help is available in the game by clicking the Help button in the top right
corner.

https://mastermind-game.lixquid.com

## Features

- Customizable game settings:
    - Length of the code
    - Maximum amount for each digit
    - Allow duplicates or not

## Development

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
