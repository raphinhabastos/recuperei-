import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})

export default class api {

    async listar() {
        let r = await api.get('/nome');
    return r.data;
    }   

    async inserir(nome) {
        let r = await api.post('/lista', {nome})
    return r.data;
    }   
} 