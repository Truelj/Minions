//create store using Redux Core
import rootReducer from './rootReducer.js';
import { legacy_createStore } from 'redux';

const store = legacy_createStore(rootReducer);

export default store;