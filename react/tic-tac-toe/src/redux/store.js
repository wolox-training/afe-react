import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import userReducer from './users/reducer';

const reducers = {
  form: formReducer,
  users: userReducer
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [applyMiddleware(thunk)];
const reducer = combineReducers(reducers);
const store = createStore(
  reducer, composeEnhancers(...enhancers));

export default store;
