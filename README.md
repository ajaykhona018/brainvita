
# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

## Application Design

Following components form the core of the application:
1. **Board** - This is responsible for iterating through the Cells and displaying them.
2. **Cell** - This handles drag & drop functionality and also renders marbles as per the state
3. **Form** - Responsible for taking username as input and validating the same, showing error messages & submitting to dummy JSON Placeholder API

The Application state is managed under **state-management** folder which uses **useContext** & **useReducer** hooks of React.

File **constants.ts** contains a function to generate the initial board state.

Board State is **7x7** array of Cells `ICellProps`

 - **rowIndex**: Stores current rowIndex. 
 - **columnIndex**: Stores current columnIndex.
 - **isVisible**: Stores whether a Cell is visible or not. This value being false  represents the 4 corner cells. 
 - **hasMarble**: Stores whether a Cell contains marble.
 - **allowed**: Stores whether a marble can be dropped in this Cell.

  All the styles are stored in **styles.ts** as Styled-Components. 

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  
  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).