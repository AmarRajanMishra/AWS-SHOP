import { config } from 'dotenv'
import express from 'express';
import productRouter from './router/productRouter.js'
import connectDB from './config/configdb.js';
import cors from 'cors'


// Configure ENV File
config();


// Database Configuration
connectDB();

const server  = express();

// Middleware
server.use(cors())
server.use(express.json())
server.use('/api/v1/products', productRouter)



server.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
})
