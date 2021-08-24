
import { Box, Typography, makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getProductDetails } from '../../redux/actions/productAction'

const useStyles = makeStyles((theme) => ({
    component: {
        marginTop: 55,
        background: '#f2f2f2'
    },
    container: {
        margin: "0 80px",
        background: "#fff",
        display: "flex"
    },
    rightContainer:{
        marginTop:50,
        '&>*':{
            marginTop:10
        }
    }
}))


const DetailView = ({ match }) => {
    const classes = useStyles();
    const productDetails = useSelector(state => state.getProductDetails);
    const { product } = productDetails;
    // console.log(product.description);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
        
    }, [dispatch]);
    
    return (
        <Box className={classes.component} >
            
            {  product && Object.keys(product).length &&
                <Box className={classes.container} >
                    <Box style={{ minWidth: '40%' }} >
                        <Typography>rohit</Typography>
                        
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView;