import axios from "axios"

export default async function Auth() {
    console.log('|!| Autenticando...')
    try {
        const login = await axios.post(process.env.URL_SOLAR + "api/auth/login", {
            "email": process.env.EMAIL_SOLAR,
            "password": process.env.PASSORD_SOLAR,
            "token": process.env.TOKEN_SOLAR
        })

        const ckTkU = login.data.cookies.ckTkU
        console.log('|V| Sucesso na autenticacao!')
        console.log('|||')
        return ckTkU
    } catch (err) {
        console.log(err.message)
        return false
    }
}