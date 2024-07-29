import Desktop, * as components from "./components.js"

export function Block(event) {
    event.preventDefault()

    const CtrlKey = event.ctrlKey
    const ShiftKey = event.shiftKey
    const code = event.code.toLowerCase()

    console.log(code)

    if (ShiftKey && code === 'keyl') {
        components.screenBlock.classList.remove('opacity-0')
    }

    // if (ShiftKey && code === )
}


export function Sign(event) {
    event.preventDefault()

    const ShiftKey = event.shiftKey
    const code = event.code.toLowerCase()

    if (code === 'space' && !ShiftKey) {
        if (!components.screenBlock.classList.contains('opacity-0')) {
            components.screenBlockBootLayer.classList.add('opacity-0')
            components.screenBlockPasswordLayer.classList.remove('opacity-0')
        }
    }


    //#region Leave login screen
    if ((code === 'backspace' && ShiftKey) && !components.screenBlockPasswordLayer.classList.contains('opacity-0')) {
        components.screenBlockPasswordLayer.classList.add('opacity-0')
        components.screenBlockBootLayer.classList.remove('opacity-0')
    }

    if (!components.screenBlockPasswordLayer.classList.contains('opacity-0')) {
        if (code === 'escape') {
            components.screenBlockPasswordLayer.classList.add('opacity-0')
            components.screenBlockBootLayer.classList.remove('opacity-0')
        }
    }
    // #endregion
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