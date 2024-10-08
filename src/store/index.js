// src/store/index.js
import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
