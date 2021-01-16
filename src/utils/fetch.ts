import axios from 'axios'

const instance = axios.create({
    method: 'post',
    baseURL: '',
    withCredentials: false,
    timeout: 8000,
    headers: {
        // 'Accept': '*',
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //'scriptCharset': 'utf-8',
        // 'Authorization': 'Bearer '+localStorage.getItem("token")
        'Authorization': 'Bearer '+''
    }
})

const fetch = (url:string = '', params:object = {}, option:object = {}) => {
    if(!url) {
        return Promise.reject(`params 'url' not exist！`)
    }
    // let method = option.method || 'post'
    let method = 'post'
    switch(method) {
        case 'get':
            return instance.get(url, {
                params: params
            })
        case 'post':
            return instance.post(url, params)
        case 'put':
        case 'patch':
            return instance.post(url, params)
        default:
            return Promise.reject(`unknown request method '${method}'`)
    }
}
export default {
    async insert(params:object) {
        return await fetch('http://127.0.0.1:2691/insertCost', params, {method: 'post'})
    },
}