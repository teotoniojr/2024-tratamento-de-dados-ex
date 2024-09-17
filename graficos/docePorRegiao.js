import { pegarCSS } from "./comum.js"

async function docesPorRegiao() {
    const url = 'https://raw.githubusercontent.com/teotoniosjr/2024-API-Doces-do-Brasil-ex/main/doces-por-regiao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const regiao = dados.consumo_por_regiao
    const maisConsumidoNorte = regiao.Norte.mais_consumido
    const top5DocesNorte = dados.consumo_por_regiao.Norte.top_5_doces
    
    console.log(maisConsumidoNorte)

    const nomeRegiao = Object.keys(regiao)
    const doces = Object.keys(top5DocesNorte)
    const votos = Object.values(top5DocesNorte)

    console.log(nomeRegiao[0])

    const ultimateColors = ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)']


    console.log(votos)
    const data = [
        {
            labels: doces,
            values: votos,
            type: 'pie',
            marker: {
                colors: ultimateColors
            }
        }
    ]

    const layout =
    {
        height: 300,
        width: 600,
        plot_bgcolor: pegarCSS('--vermelho'),
        paper_bgcolor: pegarCSS('--rosa-forte')
    }

    const regiaoTitulo = document.createElement('h3')
    regiaoTitulo.classList.add('graficos-container__titulo-regiao')
    regiaoTitulo.innerHTML = `O que a região <span>${nomeRegiao[0]}</span> prefere!`


    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('graficos-container').appendChild(regiaoTitulo)
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

docesPorRegiao()