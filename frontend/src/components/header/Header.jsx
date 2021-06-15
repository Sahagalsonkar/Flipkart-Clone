import React from 'react'
import { AppBar, Toolbar, makeStyles, Typography, Button, Box, withStyles, } from '@material-ui/core';
import SearchBar from '../SearchBar';
import { ShoppingCart } from '@material-ui/icons';
import Badge from './Badge'
const useStyles = makeStyles((theme) => ({
    header: {
        background: "#2874f0",
        height: '56px',
    },
    logo: {
        height: "20px"
    },
    subLogo: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    logoText: {
        fontStyle: "italic",
        fontSize: 10
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: '12%'
    },
    login: {
        color: "#2874f0",
        background: "#fff",
        fontWeight: "bold",
        padding: '5px 40px',
        borderRadius: 1,
        marginRight: 30,
        textTransform: "unset",
    },
    subheader: {
        margin: "0 5% 0 auto",
        display: "flex",
        '& > *': {
            marginRight: 50
        }
    }

}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

export default function Header() {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Box className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.logoText} >Explore <Box component="span" style={{ color: "#ffe500" }} > Plus</Box> </Typography>
                        <img src={subURL} className={classes.subLogo} />
                    </Box>
                </Box>
                <SearchBar />
                <Box className={classes.subheader}>

                    <Button variant="contained" className={classes.login} >Login</Button>
                    <Typography>more</Typography>
                    <Box style={{ display: "flex" }} >
                        <Badge/>
                        
                        <Typography>Cart</Typography>
                    </Box>
                </Box>
            </ToolBar>
        </AppBar>
    )
}
