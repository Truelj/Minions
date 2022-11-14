import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import AllMinions from './components/AllMinions';
import Minion from './components/Minion';

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
    <Router>
      <Route path='/' onEnter={appEnter}>
        <App />
      </Route>
      <Route path='/minions' onEnter={singleMinionEnter}>
        <AllMinions/>
      </Route>
      <Route path='/minions/:id' onEnter={newMinionEnter}>
        <Minion/>
      </Route>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
