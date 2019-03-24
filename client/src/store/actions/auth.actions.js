import axios from 'axios';

export const login = credetials => {
    return (dispatch, getState) => {
        axios
            .post('http://localhost:3001/api/v1/login', {
                email: credetials.email,
                password: credetials.password
            })
            .then(response => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    authData: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    error
                })
            });
    }
}