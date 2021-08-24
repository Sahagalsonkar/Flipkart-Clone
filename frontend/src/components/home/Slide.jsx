import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography, Button, Divider } from "@material-ui/core";
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyle = makeStyles(theme => ({
    img: {
        height: 150,
    },
    component: {
        marginTop: 12,
        background: "#ffffff"
    },
    deal: {
        padding: "15px 20px",
        display: "flex"
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: "#7f7f7f",
        marginLeft: "10px",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    button: {
        marginLeft: "auto",
        background: "#2874f0",
        fontSize: 13,
        borderRadius: 2
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: "42px 15px"
    },
}))

const Slide = ({ timer, title, products }) => {
    const classes = useStyle();
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>;
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer &&
                    <>
                        <Box className={classes.timer}>
                            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" style={{ width: "24px" }} />
                            <Countdown date={Date.now() + 4.32e+7} renderer={renderer} />
                        </Box>
                    </>
                }
                <Button variant="contained" color="primary" className={classes.button} >View All</Button>
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={false}
                draggable={false}
                centerMode={true}
                //removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} >
                            <Box alignItems="center" className={classes.wrapper} >
                                <img src={product.url} className={classes.img} />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: "#212121" }} >{product.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: "#388e3c" }} >{product.discount}</Typography>
                                <Typography className={classes.text} style={{ color: "#212121", opacity: 0.6 }}>{product.tagline}</Typography>

                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;