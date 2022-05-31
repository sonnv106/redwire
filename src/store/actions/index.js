import * as api from '../api';

export const registerUser = (values)=>({
    type: 'AUTH_USER',
    playload: api.registerUser(values)
})