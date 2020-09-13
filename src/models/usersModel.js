import {action, thunk, computed} from 'easy-peasy';
import {signIn, signUp, checkTokenService} from '../services/auth';

const usersModel = {
  user: {},
  checkToken: thunk(async (actions, payload) => {
    await checkTokenService(payload).then(userToken => {
      if (userToken == null) {
        actions.setUserToken(userToken);
      }
    });
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  setUserToken: action((state, payload) => {
    state.user.jwt = payload;
  }),
  isSignedIn: computed(state => state.user.jwt != null)
};

export default usersModel;
