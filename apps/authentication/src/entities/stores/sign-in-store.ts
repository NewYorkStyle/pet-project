import i18nAuthenticationInstance from '../../shared/utils/i18n-init';
import {signInApi} from '../api';
import {E_TOAST_SEVERITY, showToast, userStore} from '@common';
import {makeAutoObservable, runInAction} from 'mobx';

class SignInStore {
  private _loginLoading = false;

  public login = '';
  public password = '';

  get loginLoading(): boolean {
    return this._loginLoading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  signIn = async () => {
    this._loginLoading = true;

    try {
      const data = await signInApi(this.login, this.password);

      runInAction(() => {
        if (data) userStore.isUserLogged = true;
      });
    } catch (error) {
      showToast({
        severity: E_TOAST_SEVERITY.ERROR,
        summary: i18nAuthenticationInstance.t(
          'Authentication.SignIn.AuthError'
        ),
      });
    } finally {
      this._loginLoading = false;
    }
  };
}

export const signInStore = new SignInStore();
