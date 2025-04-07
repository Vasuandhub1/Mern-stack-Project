import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoute.js';
import cors from 'cors';
import Redis from 'ioredis';
import fileUpload from 'express-fileupload';



dotenv.config()
connectDB();
const app = express()
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(fileUpload());

// configure redis 
export const redis = new Redis({
    host: 'redis-10481.c61.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 10481,
        password:process.env.REDIS_KEY,
})

redis.on("connect",()=>{
    console.log("connected to the redis")
})

// checking the redis connection 
const hello = await redis.ping()
console.log(hello)

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.get('/', (req,res) =>{
    res.send("<h1>Customized T-Shirt ECommerce Website</h1>");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT , () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})

