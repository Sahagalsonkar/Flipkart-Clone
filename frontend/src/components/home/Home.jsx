import { Box, makeStyles } from '@material-ui/core';
import {useEffect} from 'react';

import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import Midsection from './Midsection';
// import { products } from '../../constants/data';
import {useSelector, useDispatch } from 'react-redux'
import {getProducts as listProducts} from '../../redux/actions/productAction'

const useStyle = makeStyles(theme=>({


    components: {
        padding: '10px',
        background: '#F2F2F2'
    },
    leftwrapper:{
        width:"80%",
        [theme.breakpoints.down('md')]:{
            width:"100%"
        }
    },
    rightwrapper:{
        background:"#ffffff",
        padding:7,
        margin:"12px 0 0 10px",
        width:"20%",
        [theme.breakpoints.down('md')]:{
            display:"none"
        }
    }
}))




const Home = () => {
    const classes = useStyle();

    const {products} = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(listProducts())
    },[dispatch]);

    return (
        <div>
            <NavBar />
            <Box className={classes.components}>
                <Banner />
                <Box style={{display:"flex"}}>
                    <Box className={classes.leftwrapper}>
                        <Slide timer={true} title="Deals of the day" products={products} />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" style={{width:250}} />
                    </Box>
                </Box>
                <Midsection/>
                <Slide timer={false} title="Best Price On Fashion" products={products} />
                <Slide timer={false} title="Furniture Bestsellers" products={products} />
                <Slide timer={false} title="Top Offers On"  products={products}/>
                <Slide timer={false} title="Health Care Essentials" products={products} />
                <Slide timer={false} title="Best of Electronics" products={products} />
            </Box>
        </div>
    )
}
export default Home;