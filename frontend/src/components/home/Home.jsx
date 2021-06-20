import { Box,makeStyles } from '@material-ui/core';


import NavBar from './NavBar';
import Banner from './Banner';


const useStyle=makeStyles({


    components :{
        padding :'10px',
        background: '#F2F2F2'
    }
})




const Home=()=>{
    const classes=useStyle();
    return (
        <div>

<NavBar/>
<Box className={classes.components}>
<Banner/>
</Box>

        </div>

    )
}
export default Home;