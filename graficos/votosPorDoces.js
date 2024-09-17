import { pegarCSS, configTick } from "./comum.js"

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
            type: 'bar',
            marker: {
                color: pegarCSS('--violeta')
            }
        }
    ]

    const layout = {
        plot_bgcolor: pegarCSS('--vermelho'),
        paper_bgcolor: pegarCSS('--rosa-forte'),
        width: 1200,
        title: {
            text: 'Os doces mais votados no Brasil',
            font:{
                color: pegarCSS('--violeta'),
                family: pegarCSS('--fonte-titulo'),
                size: 30
            }
        },
        xaxis: {
            tickfont: configTick,
            title: {
                text: 'Doces votados',
                font:{
                    family: pegarCSS('--fonte-texto'),
                    color: pegarCSS('--vermelho'),
                    size: 27
                }
            }
        },
        yaxis:{
            tickfont: configTick,

        }
    }

    const grafico = document.createElement('div')
    grafico.className ='grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

votosPorDoces()