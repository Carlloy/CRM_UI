import axios from 'axios'
import Querystring from 'querystring'
const url = "https://localhost:8443";

export default {
    user : {
    login: (credentials) => axios({
        url: '/oauth/token',
        method: 'post',
        baseURL: url,
        withCredentials: true,
        params: {
            grant_type :"password",
            username : "admin@gmail.com",
            password:"password",
        },
        header : {
            Authorization : "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0"
        },

        responseType: 'json'
        }
    ).then(response => console.log(response.data))
        // login: (credentials) => axios.post('/oauth/token', {credentials}).then(res => res.data.user)
}};
