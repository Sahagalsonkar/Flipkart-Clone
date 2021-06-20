import DefaultData from './default.js';
import express from 'express'
//const express = require('express');
import mongoose from 'mongoose';
//const mongoose = require("mongoose");
// const Data = require('./default.js');
const app = express();




const PORT = 8000;
const URL = "mongodb+srv://VishRohit123:VI1234@ecommerce.az8em.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
.then(
    console.log("MongoDB connected to Server")
).catch(error=>{
    console.log('error',error.message)
})

app.listen(PORT, () =>{
    console.log(`server is started at PORT ${PORT}`)
})

DefaultData();