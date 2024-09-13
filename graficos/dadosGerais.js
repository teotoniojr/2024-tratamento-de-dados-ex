const url = 'https://raw.githubusercontent.com/teotoniosjr/2024-API-Doces-do-Brasil-ex/main/dados_gerais.json'

async function vizualizarInformacoesGerais() {
    const res = await fetch(url)
    const dados = await res.json()
    const totalEntrevistados = (dados.numero_de_brasileiros / 1e6)
    

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Entrevistamos <span>${totalEntrevistados} milhão</span> de brasileiros para descobrir quais são os doces mais queridos por todos!`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGerais()