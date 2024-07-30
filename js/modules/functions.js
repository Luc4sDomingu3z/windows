export function formatedDate() {
    const data = new Date(Date.now())

    const _hourFormat = new Intl.DateTimeFormat('pt-br', {
        timeZone: "America/Sao_Paulo",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    })

    const _dateFormat = new Intl.DateTimeFormat('pt-br', {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        weekday: "long",
        month: "long",
    })

    const _H = _hourFormat.format(data);
    const _D = _dateFormat.format(data);

    return {
        hora: _H,
        data: _D
    }
}