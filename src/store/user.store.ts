export class UserStore {
  public userName: string = '';
  private userLogged: boolean = false;

  public setName(name: string) {
    if (name !== '') {
      this.userLogged = true;
      this.userName = name;
    }
  }

  public isUserLogged() {
    return this.userLogged;
  }
}
