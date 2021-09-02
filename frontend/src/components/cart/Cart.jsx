import React, {useEffect} from 'react'
import {Box, Typography,makeStyles, Button } from "@material-ui/core";

import  { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

const useStyle = makeStyles({
    component: {
        marginTop: '55px',
        padding: '30px 135px',
        display: 'flex',
        
    },
    header: {
        padding:'15px 24px',
        background:'#fff'
    },
    placeOrder:{
        background:"#fb641b",
        color:"#fff",
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto',
    },
    button:{
        padding:'16px 22px',
        background:'#fff',
        borderTop:'1px solid #f0f0f0',
        boxShadow:"0 -2px 10px 0 rgb(0 0 0 /10% )"
    }
})

export default function Cart() {
    const classes = useStyle();

    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch()

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    useEffect(()=>{
        console.log(cartItems);
    })

    return (
        <>
            {
                cartItems.length ? 
                    <Box className={classes.component} >
                        <Box className={classes.leftcomponent}>
                            <Box className={classes.header}>
                                <Typography style={{fontWeight:600, fontSize:18}} >My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                                ))
                            }
                            <Box className={classes.button}>
                                <Button className={classes.placeOrder} variant="contained" >Placce Order</Button>
                            </Box>
                        </Box>
                        <TotalView cartItems={cartItems} />
                        {/* <p>Hello from Cart items</p> */}
                    </Box>
                :
                <EmptyCart/>
        }
        </>
    )
}
