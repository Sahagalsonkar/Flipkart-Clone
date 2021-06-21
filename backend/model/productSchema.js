import mongoose from "mongoose"


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

export default mongoose.model('product', productSchema);