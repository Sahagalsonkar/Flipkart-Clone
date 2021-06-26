import {Dialog,DialogContent,makeStyles,Box,Typography,Button} from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyle=makeStyles({

    component :{
        height:'70vh',
        width:'90vh'

    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
       height:'70vh',
       backgroundRepeat:'no-repeat',
       background:'#2874f0',width:'40%',
       backgroundPosition:'center 85%',
       padding:'45px 35px',
       '& > *':{
           color :'#FFFFFF',
           fontWeight:600
       }
    }
})



const  Login =({open,setOpen})=>{
    const classes=useStyle();
    const handleClose=()=>{
        setOpen(false);
    }
return(
    <Dialog open={open} onClose={handleClose}>
         <DialogContent className={classes.component}>
            <Box style={{display:'flex'}}>
                <Box className={classes.image}>
                <Typography variant="h5">Login</Typography>
                <Typography style={{marginTop:20}}>Get access To your Orders,Wishlist and Recommendations</Typography>
                </Box>
                <Box>
                <TextField name='username' label='Enter Email/Mobile Number'/>
                <TextField name='password' label='Enter Password'/>
                <Typography>By continuing, you agree to flipkart's Terms of use and Privacy Policy, </Typography>
                 <Button>Login</Button>
                 <Typography>OR</Typography>
                  <Button>Request otp</Button>   
                  <Typography>New To Flipkart? Create an Acount></Typography>            
                </Box>
            </Box>
         </DialogContent>
    </Dialog>

)

}
export default Login;
