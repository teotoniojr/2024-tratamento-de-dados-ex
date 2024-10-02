const pegarCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configTick = {
    color: pegarCSS('--violeta'),
    size: 16,
    family: pegarCSS('--fonte-texto')
}

const criarGraficoRedondo = (nomeRegiao, data, layout) => {
    const regiaoTitulo = document.createElement('h3')
    regiaoTitulo.classList.add('graficos-container__titulo-regiao')
    regiaoTitulo.innerHTML = `O que a região <span>${nomeRegiao}</span> prefere!`


    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('graficos-container').appendChild(regiaoTitulo)
    document.getElementById('graficos-container').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config)
}

function incluirTexto(texto){
    const container = document.getElementById('graficos-container')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = texto
    container.appendChild(paragrafo)
}

export{pegarCSS, configTick, criarGraficoRedondo, incluirTexto}