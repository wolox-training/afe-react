import matchesService from '../../services';
import { GET_USERS, TOKEN } from '../../constants';

export const fetchUsers = () => async dispatch => {
  const users = await matchesService.getUsers();
  if (users.ok) {
    dispatch(actionsCreators.getUsers(users.data));
  } else {
    console.error('error');
  }
};

export const sendToken = (token) => dispatch => {
  dispatch(actionsCreators.dispatchToken(token));
};

const actionsCreators = {
  getUsers: users => ({
    type: GET_USERS,
    payload: users
  }),
  dispatchToken: token => ({
    type: TOKEN,
    payload: token
  })
};

export default actionsCreators;
