import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = completeState({
  matches: []
});
const reducerDescription = {
  primaryActions: [actions.GET_MATCHES]
};

const reducer = createReducer(defaultState, completeReducer(reducerDescription));

export default reducer;
