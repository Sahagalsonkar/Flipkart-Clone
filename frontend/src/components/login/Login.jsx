import {Dialog,DialogContent,makeStyles} from '@material-ui/core';

const useStyle=makeStyles({

    component :{
        height:'70vh',
        width:'90vh'

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
            <p>Hello</p> 
         </DialogContent>
    </Dialog>

)

}
export default Login;
