/* eslint-disable */
import api from '../api'
import {USER_LOGGED_IN} from '../types'

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});
export const login = (credentials) => () => api.user.login(credentials).then(user => user(userLoggedIn(user)));