import * as action from '../constants/cartConstants';
import axios from 'axios';

const url = 'http://localhost:9000';
export const addToCart = (id) => async (dispatch) => {
    try { 
        const {data} = await axios.get(`${url}/product/${id}`)
        console.log(data)
        dispatch({ type: action.ADD_TO_CART, payload: data });

        // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
    } catch (error) {
        console.log('Error while calling cart API');
        dispatch({type: action.ADD_TO_CART_FAIL, payload: error.response})
    }
};

export const removeFromCart = (id) => (dispatch) => {
    console.log(id);
    dispatch({
        type: action.REMOVE_FROM_CART,
        payload: id
    })

    // localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};