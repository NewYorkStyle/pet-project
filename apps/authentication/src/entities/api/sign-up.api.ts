import {api} from '@common';

export const signUpApi = (login: string, passwordHash: string) => {
  return api.post('/user/signUp', {login, passwordHash});
};
