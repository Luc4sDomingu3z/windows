import Desktop, * as components from "./modules/components.js";
import User, { Users } from "./modules/User.js";
import { Block, LoadUsersList, Sign } from "./modules/commands.js";


Desktop.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault()


    Desktop.addEventListener('keyup', (e) => {
        Block(e);
        Sign(e);
    })

    LoadUsersList(Users.users())
    
    const Lucas = new User("Lucas", "senha")
    const Noel = new User("Noel", "senha")
    Lucas.save()
    Noel.save()

    Users.deluser(Lucas.nome)
})
