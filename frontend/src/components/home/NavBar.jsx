import { navData } from '../../constants/data';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme=>({
    component: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between',
        overflowX:"overlay",
        [theme.breakpoints.down('md')]:{
            margin:0,
        }
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',


    },
    image: {
        width: '64px'
    },
    text: {
        fontSize: 14,
        fontWeight: 400
    }
}));


const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>

                ))
            }

        </Box>

    )
}

export default NavBar;