# Would You Rather Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This web application allows the user to:

-   Impersonate three users
-   Create a new Poll
-   Answer Polls
-   View answered and unanswered Polls
-   View a Leaderboard of the three users

## Technology Stack

-   React for the view library
-   Redux for state management
-   React Router for routing

## TL;DR

To run the project right away:

-   clone the repo with `git clone https://github.com/josemvcerqueira/would_you_rather.git`
-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## What You're Getting

The app is organized using the "Rails Style"

```bash

├── public
├── src
│   ├── components
    │   ├── actions # Includes files for actions to be dispatched
    │	├── actions # Includes image needed for the app
    │   ├── components # Includes files for components to be rendered
    │   ├── middleware # Includes files for the middleware to the redux store
    │   ├── reducers # Includes files for the reducers to the redux store
    │   ├── utils # Folder that includes a fake database, helper functions and API-like functions
    │   ├── index.css # A file with the global styles
    │   └── index.js # Index file where the store is created
├── .gitignore # Simple file to prevent unnedded files to be stored on GitHub.
├── README.md - This file.
├── package-lock.json # npm package manager file.
└── package.json # npm package manager file.

```

## Pseudo Backend Server

The provided file [`api.js`](src/utils/api.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getInitialData`] - fetches the initial from the pseudo database to get the app runnning
-   [`saveQuestion`] - saves a new Poll to the pseudo Database
-   [`saveQuestionAnswer`] - saves the answer to an existing Poll to the pseudo Database

The provided file [`helpers.js`](src/utils/helpers.js) contains the methods you will need to perform necessary operations on the backend:

-   [`generateUID`] - generates a random ID to label new Polls
-   [`randomOption`] - returns one of the 2 inputs based on a 50% chance
-   [`capitalize`] - capitalizes the first letter of the its string input
-   [`formatQuestion`] - returns a formatted Poll based on its inputs
-   [`unAnswered`] - returns a properly formatted array of the unanswered Polls ready to be consumed
-   [`answered`] - returns a properly formatted array of the answered Polls ready to be consumed
-   [`leaderboardScores`] - returns a properly formatted array to properly render the Leaderboard
-   [`handlelocation`] - allows the NavBar to display the correct page based on location pathname
-   [`handleVotes`] - returns a properly formatted object to be rendered by the OldPoll component

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Purpose

This repository is for educational purposes and part of the udacity curriculum.
