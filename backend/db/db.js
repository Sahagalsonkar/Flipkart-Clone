import mongoose from 'mongoose';



const connection = (userName, password) => {

    // sAHAGAL
    // const URL = `mongodb+srv://${userName}:${password}@flip.k0fpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    // rohit
    
    const URL = `mongodb+srv://${userName}:${password}@ecommerce.az8em.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

    mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
    .then(
        console.log('Mongodb connected')
    ).catch(error=>{
        console.log('error',error)
    })
}

export default connection;