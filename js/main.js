import Desktop, * as components from "./modules/components.js";
import User, { Users } from "./modules/User.js";
import { Block, choseUser, LoadUsersList, Sign, systemBlockDate, userLogin } from "./modules/commands.js";


Desktop.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault()


    Desktop.addEventListener('keyup', (e) => {
        Block(e);
        Sign(e);
    })

    // Listar usuários - Tela de bloqueio
    LoadUsersList(Users.users())

    // Data do sistema - Tela de bloqueio
    setInterval(() => systemBlockDate(), 999);

    // Escolhe usuário - Tela de bloqueio (login)
    components.screenBlockUsers && choseUser()

    components.screenBlockSubmit && components.screenBlockSubmit.addEventListener('click', userLogin)


    const Lucas = new User("Lucas Dominguez", "senha")
    const Noel = new User("Noel", "12345")
    
    // Users.deluser(Lucas.nome)
})
