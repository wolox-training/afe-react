import { TOKEN, SELECTED_USER } from '../../constants';

const initialState = {
  token: '',
  selectedUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
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
