import matchesService from '../../services';
import { TOKEN } from '../../constants';

export const login = (values) => async dispatch => {
  const response = await matchesService.login(values);
  if (response.ok) {
    dispatch(actionsCreators.dispatchToken(response.data.token));
    window.localStorage.setItem('token', response.data.token);
  }
  return response;
};

export const sendToken = (token) => dispatch => {
  dispatch(actionsCreators.dispatchToken(token));
};

const actionsCreators = {
  dispatchToken: token => ({
    type: TOKEN,
    payload: token
  })
};

export default actionsCreators;
