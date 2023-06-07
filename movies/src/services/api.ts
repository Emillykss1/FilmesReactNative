import axios from 'axios' 

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "90189721357a152797558b383ccd83ca",
        language: "pt-BR",
        include_adult: false,
    }
})