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
    if ((code === 'backspace' && ShiftKey) && !components.screenBlockPasswordLayer.classList.contains('opacity-0'))  {
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
    if (typeof users !== 'object' && !users && components.screenBlockUsers) return false;

    const div = document.createElement("div").classList.add("w-full")
}