import axios from "axios"

export default async function GetInfo(ckTkU: string) {
    console.log('|!| Solicitando infromacoes...')
    try {
        // Construindo o cabecalho para requisicao
        const config = {
            headers: {
                'Solarview-Tokenuniversal': ckTkU,
            },
        };
        const info = await axios.post(process.env.URL_SOLAR + "portfolio/info", null, config)
        console.log('|V| Sucesso na solicitacao!')
        console.log('|||')
        return info.data 
    } catch (err) {
        console.log(err.message)
        return false
    }
}