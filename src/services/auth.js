import axios from 'axios';
import Config from 'react-native-config';

export const signIn = async payload => {
  const body = {
    identifier: payload.email,
    password: payload.password,
  }

  let user = {}

  await axios({
    method: "POST",
    url: `${Config.API_URL}/auth/local`,
    data: body
  }).then(res => user = res.data);

  return user;
};

export const signUp = async payload => {
  const body = {
    username: payload.username,
    email: payload.email,
    password: payload.password,
  }

  let user = {}

  await axios({
    method: "POST",
    url: `${Config.API_URL}/auth/local/register`,
    data: body
  }).then(res => user = res.data);

  return user;
};
