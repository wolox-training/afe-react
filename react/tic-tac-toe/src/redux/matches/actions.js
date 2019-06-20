import matchesService from '../../services';
import { GET_MATCHES } from '../../constants';

export const fetchMatches = () => async dispatch => {
  const matches = await matchesService.getMatches();
  if (matches.ok) {
    dispatch(actionsCreators.getMatches(matches.data));
  } else {
    console.error('error');
  }
};

const actionsCreators = {
  getMatches: matches => ({
    type: GET_MATCHES,
    payload: matches
  })
};

export default actionsCreators;
