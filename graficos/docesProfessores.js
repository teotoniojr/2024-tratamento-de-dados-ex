import { pegarCSS, criarGraficoRedondo, incluirTexto } from "./comum.js"

async function docesProfessores() {
    const url = 'https://script.googleusercontent.com/a/macros/escola.pr.gov.br/echo?user_content_key=RMb2m-6-5hjgUTlsjBViVNX934zEqavDk3VoQOjNtDuowconlV3FHfd6NFV3WeSPpiF_paabja5f8SeFZZDEUEmRZJuIBxg_OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBGCNaBo701naU8cM07sy4y4YFj_89rZFXh7LdVLkQXLsuVhjp_miZv8k5DQnY-4k-6N5YYcoxrhpxwwc_uWk2VuWrVM_u_n4_TsW8eSmmeLGfp8oOB5vcOzEOGf-l-C88YZpTak_o22Q&lib=MES6ytfKfXX8kNjWxuFhUkTyQ-tvnrJNC'
    const res = await fetch(url)
    const dados = await res.json()
    const docesPreferidos = dados.slice(1).map(doces => doces[1])

    const contagemDoces = docesPreferidos.reduce((acc, docesPreferidos) => {
        acc[docesPreferidos] = (acc[docesPreferidos] || 0) + 1
        return acc
    }, {})

    console.log()
    
    const valores = Object.values(contagemDoces)
    const etiquetas = Object.keys(contagemDoces)


    const data = [
        {
            values: valores,
            labels: etiquetas,
            type:'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout =
    {
        height: 700,
        width: 800,
        plot_bgcolor: pegarCSS('--vermelho'),
        paper_bgcolor: pegarCSS('--rosa-forte'),
        title: {
            text: 'Os doces preferidos dos professores',
            font:{
                color: pegarCSS('--violeta'),
                family: pegarCSS('--fonte-titulo'),
                size: 30
            }
        }
    }
    
    criarGraficoRedondo('Tancredo', data, layout)
    incluirTexto(`Com base nesta pequena pesquisa, a preferência dos brasileiros pelo clássico <span>Brigadeiro</span> é indiscutível. O doce foi o mais votado em todo o <span>Brasil</span> e também conquistou o primeiro lugar entre os professores do colégio <span>Tancredo</span>, que fica no Sul. Na região <span>Norte</span>, o <span>Brigadeiro</span> foi o mais votado, enquanto no <span>Sul</span>, o <span>bolo de chocolate</span> ficou em primeiro lugar. O <span>bolo de chocolate</span>, por sua vez, ficou em segundo lugar no colégio <span>Tancredo</span> e não conseguiu se classificar entre os cinco primeiros na região <span>Norte</span>. Em termos de <span>votação nacional</span>, o <span>bolo de chocolate</span> ocupou a <span>quinta</span> posição.`)


}

docesProfessores()