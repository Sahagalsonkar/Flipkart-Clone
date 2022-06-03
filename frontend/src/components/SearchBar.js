import { fade, makeStyles, Box, List, ListItem } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux'
import {getProducts as listProducts} from '../redux/actions/productAction'
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: "#fff",
        width: '38%',
        marginLeft:10,
        display:"flex",
        color:"black",
        margin:15,
    },
    searchIcon: {
        padding: 6,
        height: '100%',
        display: 'flex',
        color:"#FDB44E"
    },
    inputRoot: {
        color: 'inherit',
        // fontSize:'unset',
        width:'100%',
    },
    inputInput: {
        padding: 10,
    },
    list:{
        position: 'absolute',
        color:"#000",
        background:"#fff",
        marginTop:36,
    }
}))

export default function SearchBar () {
    const classes = useStyles();
    const [text, setText] = useState();
    const [open, setOpen] = useState(true);

    const getText = (text) => {
        setText(text);
        setOpen(false);
        // console.log(text);
    }

    const {products} = useSelector(state => state.getProducts);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(listProducts())
    },[dispatch]);

    return(
        <Box boxShadow={2} className={classes.search}>
        <InputBase
            placeholder="Search for product, brand, and more"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e)=> getText(e.target.value)}
        />
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        {
            text && 
            <List className={classes.list} hidden={open} >
                {
                    products.filter(product => product.title.longTitle.toLowerCase().includes( text.toLowerCase())).map(product => (
                        <ListItem>
                            <Link to={`/product/${product.id}`} style={{textDecoration:"none", color:"inherit" }} onClick={()=>setOpen(true)} >
                                {product.title.longTitle}
                            </Link>
                        </ListItem>

                    ))
                }
            </List>
        }
    </Box>
    )

};

