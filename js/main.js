import Desktop, * as components from "./modules/components.js";
import User from "./modules/User.js";
import { Block, Sign } from "./modules/commands.js";


Desktop.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault()


    Desktop.addEventListener('keyup', (e) => {
        Block(e);
        Sign(e);
    })

})
