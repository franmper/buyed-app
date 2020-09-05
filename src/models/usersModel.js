import { action, thunk, computed } from "easy-peasy";
import {signIn, signUp} from "../services/auth"

const usersModel = {
  user: {},
  signedIn: thunk(async (actions, payload) => {
    await signIn(payload).then(user => {
      actions.setUser(user)
    });
  }),
  signedUp: thunk(async (actions, payload) => {
    await signUp(payload).then(user => {
      actions.setUser(user)
    });
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  isSignedIn: computed(state => state.user.jwt != null),
};

export default usersModel;
