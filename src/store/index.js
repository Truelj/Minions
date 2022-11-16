//create store using Redux Core
import rootReducer from './rootReducer.js';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
//import {composeWithDevTools} from 'redux-devtools-extension';
import  thunkMiddleware  from 'redux-thunk';
//import thunks


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;


