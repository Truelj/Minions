# Project Name

Minions

## Project Description

The idea of 'minions' from a project that I had finished in my web development course reminded me of the minion characters in the movie, Despicable Me. So I took the idea to build an app that only reserved the 'minions' part of the original app. 

## Motivation & What I learned

*    After learning Asynchronous Javascript, React, Redux, Passport and SQL, I wanted to build an app that uses React as its front-end framework, incorporates Redux to the view for managing the client’s internal state, communicates with a server that’s configured with Express.js, and is able to connect to a relational database. In short, I aimed to experience a full-stack development process. 


*    Starting from scratch is not easy especially to starters, so I took the main idea from an existing project that’s built by a team of much more experienced developers from Codecademy.com. In that way, I was able to focus on coding without worrying about what content and design the app should have. It makes me feel more confident when I can compare my solution to an existing robust solution given by professional developers. 

*    Being enough careful is seemly unapproachable. Sometimes what makes an error occur or having an unexpected outcome was not because I haven’t made the maximum effort or something wrong with my comprehension ability while trying to incorporate a more advanced feature into the solution. On the contrary, I can simply be blind to the code that I never think I should go wrong with, such as using assignment operator ‘ = ‘ instead of equal operation in writing a call back function used by an Array iterator method like ‘ findIndexOf() ’.

## Features

1.    First of all, I used React library to build the UI view. Although the components are ideally to handle the view only, I still prefer to incorporate the least amount of react hooks (useState() and useEffect() ) in the main components, `<AllMinions/>` and `<Minion/>` , as an alternative to letting Redux actions take the responsibility of loading data for the entire app. 

2.    However, incorporating Redux actions, especially thunks, is my second favorite coding feature. In order to use thunks like a pro, I followed the introduction on using Thunk from React website. I realized that high order function is often used for declaring thunks, and how a thunk action should be determined from a basic action by a thunk middleware. In the app, I followed the suggested thunk creating approach to create async thunks, which await the response from the server, dispatch necessary actions, and then return a value like synchronous functions. The purpose of using Redux thunks is to separate the concern of connecting to the server endpoints from the UI, so the UI can focus on the view content creation and user interaction. 

3.    Last but not least, I used Express.js framework to build the server. A main goal for building this app was to create a basic CRUD API allowing for Create, Read, Update and Delete operations to the data resource. To realize that, I wrote Express routes to match different HTTP methods, and include ‘body-parser’ and ‘cors’ to solve problems arisen with communicating to the server. 

4.    To check the project

Once you have downloaded the project, you’ll need to run some terminal commands to get the application started. Make sure you’ve installed Node. First, got the project directory in your terminal. Run ‘npm install’ to install the dependencies of this project. Once it has finished installing, you can run ‘npm start’ to build and run the front-end application. Open http://localhost:3000 to view it in your browser. After that, open a new terminal, go to the project directory, run ‘node server.js’ to begin your server. You’ll see ‘CORS-enabled Server listening on port 4001’ in the terminal. 

## Implementation Details

### Using React Router

The application of React Router can be seen in ‘/src/App.js’.

### Using React Hooks

React uses Hooks to keep track of the state of its stateful components. Check where to use hooks, such as ‘useEffect()’ and ‘useState()’, in ‘./src/Allminions.js’ and ‘./src/Minion.js’ files.

### Creating Redux store and using Redux Core

Coding details about creating a Redux store should be found under ‘./src/store’ directory, where ‘index.js’ is entrance to the entire implementation of the store. To fully practice the ‘separate of concern’ pattern, redux files are grouped together under the ./src/store directory.

### Using React-Redux
React-Redux provides hooks to make a Redux store connect to React. Usages of hooks, such as ‘useSelector()’, ‘useDispatc()’, can be found in component files under ‘./src/component’ directory. Using ‘Provider’ can be checked in ‘./index.js’, which is the entrance to react component hierarchy.

### Using Express.js
Implementation of the server using Express.js should be found at ‘./src/server.js’

### The ‘database’
Stored in ‘./src/db.js’