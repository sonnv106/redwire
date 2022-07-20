import * as api from '../api';

export const registerUser = (values)=>({
    type: 'AUTH_USER',
    payload: api.registerUser(values)
})
export const loginUser = (values)=>({
    type: 'AUTH_USER',
    payload: api.loginUser(values)
})
export const autoSignin = ()=>({
    type: 'AUTH_USER',
    payload: api.autoSignin()
})
export const logoutUser = ()=>({
    type: 'LOGOUT_USER',
    payload: api.logoutUser()
})
export const clearAuthError = ()=>({
    type: 'CLEAR_AUTH_ERROR'
})
export const updateUserData = (values, user)=>({
    type: 'UPD_USER_DATA',
    payload: api.updateUserData(values, user)
})

export const getArticles = ()=>({
    type: 'GET_ARTICLES',
    payload: api.getArticles()
})
export const getMoreArticles = (articles)=>({
    type: 'GET_ARTICLES',
    payload: api.getMoreArticles(articles)
})