import React, { useState } from 'react';
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    components: {
        marginTop: 40
    },
    logout:{
        marginLeft:20,
        fontSize: 14,
        //textDecoration: "none"
    }
}))

const Profile = ({ account, setAccount }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const logout = () => {
        setAccount('')
    }
    return (
        <>
            {
                <Link onClick={handleClick} >
                    <Typography onClick={handleClick} style={{ marginTop: 4 }}>{account}</Typography>
                </Link>
            }
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.components}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                    <PowerSettingsNewIcon fontSize="small" color="primary" />
                    <Typography className={classes.logout}> Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;