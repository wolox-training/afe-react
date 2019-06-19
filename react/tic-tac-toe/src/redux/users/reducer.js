import { GET_USERS, TOKEN, SELECTED_USER } from '../../constants';

const initialState = {
  users: [],
  token: '',
  selectedUser: {}
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
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
};
