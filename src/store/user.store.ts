
import { observable, action } from 'mobx';
export class UserStore {
  @observable public userName: string = '';
  @observable private userLogged: boolean = false;

  @action
  public setName(name: string) {
    if (name !== '') {
      this.userLogged = true;
      this.userName = name;
    }
  }

  @action
  public isUserLogged() {
    return this.userLogged;
  }
}
