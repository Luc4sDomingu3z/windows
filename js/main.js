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

    // const Lucas = new User("Lucas Dominguez", "comendoCuDeCurioso")
    // Lucas.save()

    // const Emanuel = new User("Emanuel Ferreira", "gostoso")
    // Emanuel.save()

    // const Luana = new User("Luana Chacrinha", "ecaMeleca")
    // Luana.save()

    // const mochefe = new User("Mochefe", "171")
})
