import {products} from './constants/pruducts.js'
import product from './model/productSchema.js'
// const products = require('./constants/pruducts.js');
// const product = require('./model/productSchema.js')

const DefaultData = async () =>  {
    try{
        await product.deleteMany({})
        await product.insertMany(products);

        console.log('Data inserted successfully')
    }catch(error){
        console.log("error", error.message)
    }
}

export default DefaultData;