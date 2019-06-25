import matchesService from '../../services';
import { TOKEN, SELECTED_USER } from '../../constants';

export const login = (values) => async dispatch => {
  const response = await matchesService.login(values);
  const userData = await matchesService.getUsers();
  if (response.ok) {
    if (userData.ok) {
      // this is hard-coded because the api does not return id
      dispatch(actionsCreators.selectedUser(userData.data[0]));
    }
    dispatch(actionsCreators.dispatchToken(response.data.token));
    window.localStorage.setItem('token', response.data.token);
  }
  return response;
};

export const sendToken = (token) => async dispatch => {
  const userData = await matchesService.getUsers();
  dispatch(actionsCreators.dispatchToken(token));
  if (userData.ok) {
    dispatch(actionsCreators.selectedUser(userData.data[0]));
  }
};

const actionsCreators = {
  dispatchToken: token => ({
    type: TOKEN,
    payload: token
  }),
  selectedUser: user => ({
    type: SELECTED_USER,
    payload: user
  })
};

export default actionsCreators;

