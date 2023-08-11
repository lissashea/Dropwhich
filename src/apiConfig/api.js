import axios from 'axios'

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Token ${localStorage.getItem('token') || null}`)
    })
}

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'http://localhost:4000/api'
        : ''
})

// api.interceptors.request.use(async function (config) {
//     config.headers['Authorization'] = await getToken()
//     return config
// }, function (error) {
//     console.log('Request error: ', error)
//     return Promise.reject(error)
// });

export default api