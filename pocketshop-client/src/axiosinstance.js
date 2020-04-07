import axios from 'axios';

const idToken = localStorage.getItem('token')
const instance = axios.create({
    baseURL: "http://localhost:8585/",
    // baseURL: "https://pocket-shop.herokuapp.com",
    headers: {
        'Authorization': idToken
    }

}); 

export default instance;