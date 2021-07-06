import axios from 'axios';

const url = 'http://localhost:8000';


export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/products`)
        dispatch({type: 'getProductSuccess', payload: data})
    } catch (error) {
        dispatch({type: 'getProductfail', payload: error.response})
    }
}