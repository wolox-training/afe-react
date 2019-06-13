import api from '../config/api';

export default {
  getMatches: () => api.get('/matches'),
  getUsers: () => api.get('/users')
};

