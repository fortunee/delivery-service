import axios from 'axios';

export const fetchBiker = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/api/v1/bikers')
            .then(response => {
                dispatch({
                    type: 'FETCH_BIKERS_SUCCESS',
                    biker: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'FETCH_BIKERS_ERROR',
                    error
                })
            });
    }
}