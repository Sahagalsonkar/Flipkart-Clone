import { Box, makeStyles } from '@material-ui/core';


import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import Midsection from './Midsection';

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
    return (
        <div>
            <NavBar />
            <Box className={classes.components}>
                <Banner />
                <Box style={{display:"flex"}}>
                    <Box className={classes.leftwrapper}>
                        <Slide timer={true} title="Deals of the day" />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" style={{width:250}} />
                    </Box>
                </Box>
                <Midsection/>
                <Slide timer={false} title="Best Price On Fashion" />
                <Slide timer={false} title="Furniture Bestsellers" />
                <Slide timer={false} title="Top Offers On" />
                <Slide timer={false} title="Health Care Essentials" />
                <Slide timer={false} title="Best of Electronics" />
            </Box>
        </div>
    )
}
export default Home;