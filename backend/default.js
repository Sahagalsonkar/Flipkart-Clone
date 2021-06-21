import { products } from "./constant/products.js";
import product from './model/productSchema.js'

const defaultData = async () => {

    try {
        await product.deleteMany({});
        await product.insertMany(products);
        console.log('Data inserted into data base')
    } catch (error) {
        console.log('error',error.message)
    }

}

export default defaultData;