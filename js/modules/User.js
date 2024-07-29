export class Users {

  static users() {
    const storage = window.localStorage.getItem("users");
    if (storage.length == 0) {
      return null;
    } else {
      return JSON.parse(storage);
    }
  }

  /**
   * Se existe usuário `nome`
   *
   * @param {*} nome
   * @return {*} 
   * @memberof Users
   */
  static findIt(nome) {
    if (typeof nome !== 'string') return false;

    const accounts = User.users()
    if (accounts && (typeof accounts === 'object' && accounts.length > 0)) {
      let index = 0
      for (let acc of accounts) {
        if (acc.nome.trim() === nome)
          return index
        index++;
      }
    }
  }

  static deluser(nome) {
    if (typeof nome !== 'string' || nome.trim().length == 0) return false

    let index = this.findIt(nome)

    if (typeof index === 'number') {
      const storage = this.users()
      storage.splice(index, 1)
      console.log(storage)

      window.localStorage.setItem("users", JSON.stringify(storage))
      return true
    }

    return false;
  }

}

export default class User extends Users {
  constructor(nome, senha) {
    super()
    this.nome = nome;
    this.senha = senha;
  }

  /**
   * Salvar usuário no local storage
   *
   * @return {*} 
   * @memberof User
   */
  save() {
    const storage = Users.users();
    const info = JSON.stringify([{ nome: this.nome, senha: this.senha }]);
    !storage && window.localStorage.setItem("users", info);

    if (storage !== null && (typeof storage === 'object' && storage.length > 0)) {
      const issetUser = Users.findIt(this.nome)
      console.log(issetUser)
      if (issetUser >= 0) {
        storage[issetUser].nome = this.nome
        storage[issetUser].senha = this.senha
      } else {
        storage.push({ nome: this.nome, senha: this.senha })
      }
      window.localStorage.setItem("users", JSON.stringify(storage))
      console.log(storage[issetUser])
      return true
    }

    return false
  }

  login() {
    console.log(Users.users());
  }
}
