import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Button, Box, withStyles, } from '@material-ui/core';
import SearchBar from '../SearchBar';
//import { ShoppingCart } from '@material-ui/icons';
import LoginDialog from '../login/Login';
import Badge from './Badge';
import { Link } from 'react-router-dom';
import {LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';


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
        fontSize: 10,
        textDecoration: "none",
        color: "white"
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
        boxShadow: "none",
        textDecoration: "none"
    },
    subheader: {
        margin: "0 7% 0 auto",
        display: "flex",
        '& > *': {
            marginRight: 50,
            alignItem: "center",
            color: "white",
            textDecoration: "none"
        }
    },
    badgeIcon: {
        height: 5
    }

}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

export default function Header() {
    const classes = useStyles();
    const [open,setOpen]=useState(false);
    const {account, setAccount} = useContext(LoginContext);
    const openLoginDialog=()=>{
        setOpen(true);
    }
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to="/" className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.logoText} >Explore <Box component="span" style={{ color: "#ffe500" }} > Plus</Box> </Typography>
                        <img src={subURL} className={classes.subLogo} />
                    </Box>
                </Link>
                <SearchBar />
                <Box className={classes.subheader}>
                {
                    account ? <Profile account={account} setAccount={setAccount} /> : 
                    <Link>
                        <Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login} >Login</Button>
                    </Link>
                }
                    <Link><Typography style={{ marginTop: '5px' }}>more</Typography></Link>
                    <Link to="/cart" style={{ display: "flex", marginTop: '5px' }} >
                        <Badge className={classes.badgeIcon} />
                        <Typography>Cart</Typography>
                    </Link>
                    <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
                </Box>
            </ToolBar>
        </AppBar>
    )
}
