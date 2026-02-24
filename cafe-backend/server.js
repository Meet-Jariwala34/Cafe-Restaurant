import express from "express";
import cors from 'cors';
import 'dotenv/config';
import db from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
db()
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user',userRouter);

app.use('/api/product',productRouter);

app.use('/api/order',orderRoutes);


app.listen(port, ()=>{
    console.log(`The server is listening on the port ${port}`);
})

app.get('/', (req,res)=>{
    res.send("The api is working");
})