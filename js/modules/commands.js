import Desktop, * as components from "./components.js"

export function Block(event) {
    event.preventDefault()

    const CtrlKey = event.ctrlKey
    const ShiftKey = event.shiftKey
    const code = event.code.toLowerCase()

    console.log(code)

    if (ShiftKey && code === 'keyl') {
        components.screenBlock.showModal()
    }

    // if (ShiftKey && code === )
}


export function Sign(event) {
    event.preventDefault()

    const ShiftKey = event.shiftKey
    const code = event.code.toLowerCase()

    if (code === 'space' && !ShiftKey) {
        if (components.screenBlock.open) {
            components.screenBlockBootLayer.classList.add('opacity-0')
            components.screenBlockPasswordLayer.classList.remove('opacity-0')
        }
    }

    if ((code === 'backspace' && ShiftKey) && !components.screenBlockPasswordLayer.classList.contains('opacity-0'))  {
        components.screenBlockPasswordLayer.classList.add('opacity-0')
        components.screenBlockBootLayer.classList.remove('opacity-0')
    }
}