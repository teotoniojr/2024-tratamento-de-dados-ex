const pegarCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configTick = {
    color: pegarCSS('--violeta'),
    size: 16,
    family: pegarCSS('--fonte-texto')
}

export{pegarCSS, configTick}