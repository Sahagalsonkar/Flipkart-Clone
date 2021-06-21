import React from 'react'
import {Box, Typography,makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    text:{
        marginTop: '55px'
    }
})

export default function Cart() {
    const classes = useStyle();
    return (
        <Box>
            <Typography className={classes.text}>Welcome to Cart Section </Typography>
        </Box>
    )
}
