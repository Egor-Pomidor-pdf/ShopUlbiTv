import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL  
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    // console.log("Делаем auth запрос");
    // console.log(`Берем ${localStorage.getItem(`token`)}`);
    config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}