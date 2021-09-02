
import {Card, Box, makeStyles, Typography,Button} from '@material-ui/core'
import clsx from 'clsx';
import GroupButton from './GroupButton';

const useStyle = makeStyles({
    component:{
        display:'flex',
        borderRadius:0,
        borderTop:'1px solid #f0f0f0'
    },
    Leftcomponent: {
        margin:'20px',
        display:'flex',
        flexDirection:'column',
    },
    Rightcomponent: {
        margin:'20px',
    },
    smallText:{
        fontSize:'14px',

    },
    greyTextColor: {
        color:"#878787"
    },
    price:{
        fontSize:'18px',
        fontWeight:'bold',
    },
    image:{
        width:'110px',
        heigth:'110px',
    },
    remove:{
        marginTop:'20px',
        fontSize:"20px"
    }
})

const CartItem = ({item, removeItemFromCart}) => {
    const classes = useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return (
        <Card className={classes.component}  >
            <Box className={classes.Leftcomponent}>
                <img className={classes.image} src={item.url} />
                <GroupButton/>
            </Box>
            <Box className={classes.Rightcomponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText,classes.greyTextColor)} style={{marginTop:'10px' }}>Seller:Fortune500 <img src={fassured} style={{width:50, marginLeft:'10px'}} /> </Typography>
                <Typography style={{margin:'20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor} ><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color:'#388e3c'}} >{item.price.discount} off</span>
                </Typography>
                <Button className={classes.button} onClick={()=>removeItemFromCart(item.id)} >REMOVE</Button>
            </Box>
        </Card>
    )
}

export default CartItem;