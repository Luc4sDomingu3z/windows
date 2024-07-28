export class Users {
  constructor(nome, senha) {
    this.nome = nome;
    this.senha = senha;
  }

  get users() {
    const storage = window.localStorage.getItem("users");
    if (!storage) {
      return null;
    } else {
      return JSON.parse(storage);
    }
  }
}

export default class User extends Users {
  constructor(nome, senha) {
    super(nome, senha);
  }

  save() {
    const storage = this.users;
    const info = JSON.stringify([{ nome: this.nome, senha: this.senha }]);
    !storage && window.localStorage.setItem("users", info);

    if (storage && typeof storage === "object") {
      if (storage.length > 0) {
        for (let v of storage) {
          if (v.nome === this.nome) {
            v.nome = this.nome;
            v.senha = this.senha;
            return true;
          }
        }

        storage.push({ nome: this.nome, senha: this.senha });
        window.localStorage.setItem("users", JSON.stringify(storage));
      }
    }
  }

  login() {
    console.log(this.users);
  }
}
