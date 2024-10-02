import { pegarCSS, criarGraficoRedondo } from "./comum.js"

async function docesPorRegiao() {
    const url = 'https://raw.githubusercontent.com/teotoniosjr/2024-API-Doces-do-Brasil-ex/main/doces-por-regiao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const regiao = dados.consumo_por_regiao
    const maisConsumidoNorte = regiao.Norte.mais_consumido
    const top5DocesNorte = dados.consumo_por_regiao.Norte.top_5_doces
    
    console.log(maisConsumidoNorte)

    const nomeRegiaoNorte = Object.keys(regiao)[0]
    const doces = Object.keys(top5DocesNorte)
    const votos = Object.values(top5DocesNorte)

    

    const ultimateColors = ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)']


    
    const data = [
        {
            labels: doces,
            values: votos,
            type: 'pie',
            textinfo: 'label+percent',
            marker: {
                colors: ultimateColors
            }
        }
    ]

    const layout =
    {
        height: 500,
        width: 600,
        plot_bgcolor: pegarCSS('--vermelho'),
        paper_bgcolor: pegarCSS('--rosa-forte'),
        title: {
            text: 'Os doces mais votados no Norte',
            font:{
                color: pegarCSS('--violeta'),
                family: pegarCSS('--fonte-titulo'),
                size: 25
            }
        },
    }

    criarGraficoRedondo(nomeRegiaoNorte, data, layout)
    
}

docesPorRegiao()