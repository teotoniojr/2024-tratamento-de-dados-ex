async function votosPorDoces() {
    const url = 'https://raw.githubusercontent.com/teotoniosjr/2024-API-Doces-do-Brasil-ex/main/votos_por_doces.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosDoces = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: nomeDosDoces,
            y: votos,
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className ='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

votosPorDoces()