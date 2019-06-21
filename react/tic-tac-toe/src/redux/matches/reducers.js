import { GET_MATCHES } from '../../constants';

const initialState = {
  matches: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        matches: action.payload
      };
    default:
      return state;
  }
};
