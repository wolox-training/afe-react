import { actions } from './actions';

const initialState = {
  email: null,
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_EMAIL_TOKEN:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token
      };
    default:
      return state;
  }
}

export default reducer;
