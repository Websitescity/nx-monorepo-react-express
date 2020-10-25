# Nx-Monorepo React x 2 + Express.js

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

This project was generated using [Nx](https://nx.dev).
When using Nx, you can create multiple applications and libraries in the same workspace.

Mono repo contains:

- React app "app1" `./apps/app1`
- React app "app2" `./apps/app2`
- Express.js `./apps/api`
- Common interfaces `./libs/api-interfaces`
- Library of React component `./libs/shared-components`

All dependencies are in `./package.json`

## Generate an application inside project

Run `nx g @nrwl/react:app [APP NAME]` to generate an application.

## Generate a React library

Run `nx g @nrwl/react:lib [COMPONENTS LIBRARY NAME]` to generate a library.

Libraries are sharable across libraries and applications. They can be imported from `@nx-monorepo/[COMPONENTS LIBRARY NAME]`.

## Development server

Run `nx serve [APP NAME]` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build [APP NAME]` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test [APP NAME]` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e [APP NAME]` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.
