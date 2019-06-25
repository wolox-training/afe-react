import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import matches from './matches/reducers';
import login from './login/reducer';

const reducers = combineReducers({
  form: formReducer,
  login,
  matches
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, composeEnhancers(applyMiddleware(thunk, fetchMiddleware))
);
export default store;
