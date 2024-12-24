import {makeAutoObservable} from 'mobx';

class UserStore {
  private _isUserLogged = false;

  get isUserLogged(): boolean {
    return this._isUserLogged;
  }

  set isUserLogged(value: boolean) {
    this._isUserLogged = value;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
