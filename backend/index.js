import  express  from 'express';
import mongoose from 'mongoose';


import connection from './db/db.js';
import dotenv from 'dotenv';
import defaultData from './default.js';

const app = express();
dotenv.config();

const port = process.env.PORT;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



//mongodb connection 
connection(userName, password);

app.listen(port, ()=>console.log(`server is running on PORT ${port}`))

//defaultdata to mongodb data base

defaultData();