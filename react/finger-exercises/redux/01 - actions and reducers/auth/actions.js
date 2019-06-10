export const actions = {
  ADD_EMAIL_TOKEN: '@@AUTH/ADD_EMAIL_TOKEN'
};

export default {
  logIn: (email, token) => ({
    type: actions.ADD_EMAIL_TOKEN,
    payload: {
      email,
      token
    }
  })
};
