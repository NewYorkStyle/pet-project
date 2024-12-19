import {signUpApi} from '../api';
import {userStore} from '@common';
import {makeAutoObservable, runInAction} from 'mobx';

class SignUpStore {
  private _singUpLoading = false;

  public login = '';
  public password = '';
  public passwordConfirm = '';

  get singUpLoading(): boolean {
    return this._singUpLoading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  signUp = async () => {
    this._singUpLoading = true;

    try {
      const data = await signUpApi(this.login, this.password);

      runInAction(() => {
        if (data) userStore.isUserLogged = true;
      });
    } catch (error) {
      console.error(error);
    } finally {
      this._singUpLoading = false;
    }
  };
}

export const signUpStore = new SignUpStore();
