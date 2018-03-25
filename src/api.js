import axios from 'axios'

export default {
    user : {
        login: (credentials) => axios({
            url : '/oauth/token',
            method: 'post',
            params: {
                grant_type:'password',
                username: credentials.email,
                password: credentials.password
            },
            withCredentials: true,
            auth: {
                username: 'my-trusted-client',
                password: 'secret'
            },


        }).then(res => res.data)
}};
