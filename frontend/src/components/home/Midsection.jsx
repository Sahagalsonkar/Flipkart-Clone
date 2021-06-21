import { ImageURL } from "../../constants/data";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    section: {
        display: "flex",
        marginTop: 15,
        justifyContent: "space-between"
    }
})

const Midsection = () => {
    const classes = useStyle()
    return (
        <>
            <Box className={classes.section}>
                {
                    ImageURL.map(image => (
                        <img src={image} style={{ width: "33%" }} />
                    ))
                }
            </Box>
            <img src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50" style={{width:"100%", marginTop:20}} />
        </>
    )
}

export default Midsection;