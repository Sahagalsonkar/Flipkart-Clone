import { ImageURL } from "../../constants/data";
import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    section: {
        display: "flex",
        marginTop: 15,
        justifyContent: "space-between"
    },
    help:{
        width: "100%",
        marginTop: 20,
        [theme.breakpoints.down('md')]:{
            objectFit:"cover",
            height:120
        }
    }
}))

const Midsection = () => {
    const classes = useStyle()
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.section}>
                {
                    ImageURL.map(image => (
                        <Grid lg={4} md={4} sm={12} xs={12} item>
                            <img src={image} style={{ width: "100%" }} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" className={classes.help} />
        </>
    )
}

export default Midsection;