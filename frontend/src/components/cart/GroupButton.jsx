
import React, {useState} from 'react';
import {Button, ButtonGroup, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop:30,
    },

})

const GroupButton = () => {
    const classes = useStyles();
    const [counter, setCounter] = useState(1);

    const handleDecreament =() => {
        setCounter(counter => counter -1 );
    }

    const handleIncreament = () => {
        setCounter(counter => counter +1 );
    }

    return(
        <ButtonGroup className={classes.container}>
            <Button onClick={() =>handleDecreament()} disabled={counter === 1} className={classes.button} >-</Button>
            <Button>{counter}</Button>
            <Button onClick={() =>handleIncreament()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}


export default GroupButton;