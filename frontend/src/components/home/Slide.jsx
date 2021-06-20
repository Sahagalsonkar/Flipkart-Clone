import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {products} from '../constants/data';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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


const Slide = () => {
    return(
        <Carousel responsive={responsive} >
            {
                products.map(products => (
                    <img url={products.url} />
                ))
            }
        </Carousel>
    )
}

export default Slide;