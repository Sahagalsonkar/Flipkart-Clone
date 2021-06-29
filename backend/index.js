import  express  from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import connection from "./db/db.js";
import dotenv from 'dotenv';
import defaultData from './default.js';
import Routes from './routes/Routes.js'
const app = express();
dotenv.config();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/', Routes);

const port = process.env.PORT;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



//mongodb connection 
connection(userName, password);

app.listen(port, ()=>console.log(`server is running on PORT ${port}`))

//defaultdata to mongodb data base

defaultData();