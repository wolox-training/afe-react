import { createTypes, completeTypes } from 'redux-recompose';

import matchesService from '../../services';

export const actions = createTypes(completeTypes(['GET_MATCHES']), '@@MATCHES');

export const actionCreators = {
  getMatches: () => ({
    type: actions.GET_MATCHES,
    target: 'matches',
    service: matchesService.getMatches
  })
};
