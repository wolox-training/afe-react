import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import matches from './matches/reducers';

const reducers = {
  matches
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [applyMiddleware(thunk)];
const reducer = combineReducers(reducers);
const store = createStore(
  reducer, composeEnhancers(...enhancers));

export default store;
