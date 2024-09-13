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


    console.log(votos)
    const data = [
        {
            labels: doces,
            values: votos,
            type: 'pie'
        }
    ]

    const layout =
    {
        height: 300,
        width: 870,
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