import { GET_USERS, TOKEN } from '../../constants';

const initialState = {
  users: [],
  token: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...action.payload]
      };
    case TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};
