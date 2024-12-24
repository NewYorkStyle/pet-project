import {api} from '@common';

export const signInApi = (login: string, passwordHash: string) => {
  return api.post('/user/signIn', {login, passwordHash});
};
