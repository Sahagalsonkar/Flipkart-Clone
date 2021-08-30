import { fade, makeStyles, Box } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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
        color:"#2874f0"
    },
    inputRoot: {
        color: 'inherit',
        // fontSize:'unset',
        width:'100%',
    },
    inputInput: {
        padding: 10,
    },
}))

export default function SearchBar () {
    const classes = useStyles();
    return(
        <Box boxShadow={2} className={classes.search}>
        <InputBase
            placeholder="Search for product, brand, and more"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
    </Box>
    )
    
};

