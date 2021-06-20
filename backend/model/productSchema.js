
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String,

})

const products = mongoose.model('product', productSchema);
export default products;