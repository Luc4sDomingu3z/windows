import Desktop, * as components from "./modules/components.js";
import { Block } from "./modules/commands.js";


Desktop.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault()


    Desktop.addEventListener('keyup', (e) => {
        Block(e);
    })

})