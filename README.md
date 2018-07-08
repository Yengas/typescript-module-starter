# typescript-module-starter

This project is a lightweight, simple typescript starter to build node and web modules. It contains features such as testing, linting, auto doc generation according to my own tastes.

## Commands
- `npm test` starts testing *.ts* files contained in the **\_\_tests__** folder. You may write your tests with typescript.
- `npm run lint` runs the linter against source and test scripts.
- `npm run docs` generates and outputs a *docs-build* folder, using typedoc. You can copy paste the html files to somewhere else, or publish them with gh-pages.
- `npm run build` builds the project and outputs javascript and types files into *lib* folder.
- `npm run build:web` builds the project as a single vanilla js bundle, and outputs to web-build.

## Starting with this project
Clone this project, remove the `.git` folder, change the information in [package.json](./package.json) and [webpack.config.js](./web.tsconfig.json) according to your own project's name, description, keywords and etc. Then you can roll your first commit to get going.
