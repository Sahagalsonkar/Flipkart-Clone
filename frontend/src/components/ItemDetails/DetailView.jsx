import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, Table,TableBody,TableRow,TableCell, CircularProgress, Button, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { getProductById } from '../../service/api';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productAction.js';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        width: '60%',
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
        verticalAlign:'baseline',
        '&>*>*':{
            fontSize: 14,
            marginTop:10,
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge:{
        fontSize: 14,
        marginRight: 10,
        color:"#00cc00"
    }
}));

const data = { 
    id: '',
    url: '', 
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    }, 
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '', 
    tagline: '' 
};

const DetailView = ({ history, match }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    // const [ product, setProduct ] = useState(data);
    // const [ loading, setLoading ] = useState(false);
    // const { id } = useParams();

    // const [ quantity, setQuantity ] = useState(1);

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    const {products} = useSelector(state => state.getProductDetails);
    // const { loading, product } = productDetails;
    console.log('product from state :');
    console.log(products);

    const dispatch = useDispatch();
    
    useEffect(() => {
        // if(product && match.params.id !== product.id)   
            dispatch(getProductDetails(match.params.id));
    }, [dispatch]);

    // useEffect(() => {
    //     getProductValues();
    // }, []);

    // const getProductValues = async () => {
    //     setLoading(true);
    //     const response = await getProductById(id);
    //     console.log(response.data);
    //     setProduct(response.data);
    //     setLoading(false);
    // }

    return (
        <Box className={classes.component}>
            {
                products && Object.keys(products).length &&
                <Box className={classes.container}>
                    <Box style={{ width: '40%' }} >
                        <ActionItem products={products} />
                    </Box>
                    <Box className={classes.rightContainer} >
                        <Typography>{products.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText,classes.greyTextColor)}>8 Rating & 10 Reviews
                        <span><img src={fassured} style={{width:77,marginLeft:20}} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{products.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{products.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#388e3c'}} >₹{products.price.discount} off</span>
                        </Typography>
                        <Typography style={{marginTop:20, fontWeight:600}}>Available Offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><LocalOfferIcon className={classes.badge}/> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography><LocalOfferIcon className={classes.badge}/> Bank Offer20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik</Typography>
                            <Typography><LocalOfferIcon className={classes.badge}/> Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                            <Typography><LocalOfferIcon className={classes.badge}/> Special PriceGet extra 5% off (price inclusive of discount)</Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText} >
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight:600}} >{date.toDateString()} | ₹80</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell>
                                        <span style={{ color: "#2878f0"}}>COBIOMAN</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell colspan={2} >
                                        <img src={sellerURL} style={{ width:300}} />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{products.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView;

