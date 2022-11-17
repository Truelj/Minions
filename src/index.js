import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import reportWebVitals from './reportWebVitals.js';

import { Route, BrowserRouter as Router} from 'react-router-dom';

import AllMinions from './components/AllMinions.js';
import Minion from './components/Minion.js';
//import TestMinions from './store/tests/testMinions';
import TestSelectedMinion from './store/tests/testSelectedMinions';

const appEnter = () =>{
  //store.dispatch(setMinions)
}

const singleMinionEnter = () =>{
  //store.dispatch(setSelectedMinion)
}

const newMinionEnter = () =>{
  //store.dispatch(setSelectedMinion)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    <TestSelectedMinion></TestSelectedMinion>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
