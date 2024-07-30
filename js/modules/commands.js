import Desktop, * as components from "./components.js"
import { formatedDate } from "./functions.js"
import { Users } from "./User.js"

const css = ['opacity-0', 'select-none', 'pointer-events-none']

export function Block(event) {
    event.preventDefault()

    const CtrlKey = event.ctrlKey
    const ShiftKey = event.shiftKey
    const code = event.code.toLowerCase()

    if (ShiftKey && code === 'keyl') {
        components.screenBlock.classList.remove(...css)
        
    }

    if (ShiftKey && code === 'keyj') {
        unBlock()
    }
    // if (ShiftKey && code === )
}


export function Sign(event) {
    event.preventDefault()

    const ShiftKey = event.shiftKey
    const code = event.code.toLowerCase()

    if (code === 'space' && !ShiftKey) {
        if (!components.screenBlock.classList.contains('opacity-0')) {
            components.screenBlockBootLayer.classList.add(...css)
            components.screenBlockPasswordLayer.classList.remove(...css)
        }
    }


    //#region Leave login screen
    if ((code === 'backspace' && ShiftKey) && !components.screenBlockPasswordLayer.classList.contains('opacity-0')) {
        components.screenBlockPasswordLayer.classList.add(...css)
        components.screenBlockBootLayer.classList.remove(...css)
    }

    if (!components.screenBlockPasswordLayer.classList.contains('opacity-0')) {
        if (code === 'escape') {
            components.screenBlockPasswordLayer.classList.add(...css)
            components.screenBlockBootLayer.classList.remove(...css)
        }
    }
    // #endregion
}


export function unBlock() {
    console.log('fehcando')
    const el = [
        components.screenBlockBootLayer,
        components.screenBlockPasswordLayer,
        components.screenBlock
    ]

    el.forEach(comp => {
        if (!comp.classList.contains('opacity-0'))
            comp.classList.add(...css);
    })
}


export function LoadUsersList(users) {
    if (typeof users !== 'object' || !users || !components.screenBlockUsers) return false;

    const otheruser = document.getElementById("otheruser")
    const lastChild = otheruser.parentElement

    let index = 0
    for (let user of users) {

        const div = document.createElement("div")
        const input = document.createElement("input")
        const label = document.createElement("label")
        const icon = document.createElement("ion-icon")
        const p = document.createElement("p")

        div.className = "w-full"

        label.className = "transition-all p-2 ease-in-out peer-checked:bg-opacity-65 peer-checked:bg-zinc-500  hover:bg-zinc-400 bg-opacity-45 w-full flex flex-row gap-2 flex-nowrap items-center"
        label.setAttribute("for", "u_" + index)

        icon.setAttribute("name", "person-outline")
        icon.setAttribute("size", "large")
        icon.className = "p-1 rounded-full overflow-hidden text-white bg-zinc-500"

        input.className = "peer"
        input.hidden = true
        input.type = "radio"
        input.name = "users"
        input.id = "u_" + index
        input.value = user.nome

        p.className = "select-none"
        p.textContent = user.nome

        label.appendChild(icon)
        label.appendChild(p)

        div.appendChild(input)
        div.appendChild(label)

        components.screenBlockUsers.insertAdjacentElement("afterbegin", div)
        index++
    }
}


export function systemBlockDate(key = true) {
    const dataObj = formatedDate()

    if (components.screenBlockData.date !== null)
        components.screenBlockData.date.textContent = dataObj.data

    if (components.screenBlockData.hour !== null)
        components.screenBlockData.hour.textContent = dataObj.hora

}


export function choseUser() {
    let divs = components.screenBlockUsers.querySelectorAll('div')
    const obj = []
    for (let d of divs)
        obj.push({ div: d, input: d.querySelector('input') })

    for (let _obj of obj) {
        _obj.input.addEventListener('change', (e) => {
            if (_obj.input.value == 1) return false;
            if (_obj.input.checked) {
                components.screenBlockH1.textContent = _obj.input.value
                components.screenBlockInput.value = _obj.input.value
            }
        })
    }
}

export function userLogin() {
    if (components.screenBlockLoginInput == null) return false;

    const senha = components.screenBlockLoginInput.value
    const user = components.screenBlockInput.value

    if (senha.length == 0 || user.trim().length == 0) {
        console.log('Usuário ou senha inválidos.')
        return false;
    }

    Users.login(user, senha)
}