import {pegarCSS, criarGraficoRedondo, incluirTexto} from './comum.js'

async function docesSul() {
    const url = 'https://raw.githubusercontent.com/teotoniosjr/2024-API-Doces-do-Brasil-ex/main/doces-por-regiao.json'
    const res = await fetch(url)
    const dados = await res.json()
    
    const nomeRegiaoSul = Object.keys(dados.consumo_por_regiao)[4]
    const top5DoceSul = dados.consumo_por_regiao.Sul.top_5_doces
    const nomeDoces = Object.keys(top5DoceSul)
    const votoDoces = Object.values(top5DoceSul)

    console.log(nomeRegiaoSul)
    console.log(top5DoceSul)


    const data = [
        {
            values: votoDoces,
            labels: nomeDoces,
            type:'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout =
    {
        height: 500,
        width: 600,
        plot_bgcolor: pegarCSS('--vermelho'),
        paper_bgcolor: pegarCSS('--rosa-forte'),
        title: {
            text: 'Os doces mais votados no Sul',
            font:{
                color: pegarCSS('--violeta'),
                family: pegarCSS('--fonte-titulo'),
                size: 30
            }
        }
    }
    
    criarGraficoRedondo(nomeRegiaoSul, data, layout)

    incluirTexto(`O doce mais consumido no Sul do pais é diferente que no norte. Para o <span>${nomeRegiaoSul}</span> o doce mais consumido é <span>${nomeDoces[0]}</span>, seguido por <span>${nomeDoces[1]}</span>, o mesmo da região <span>Norte</span>.`)
    
    }


docesSul()