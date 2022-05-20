
import express from "express"
const app = express()

import db from "./config/database.js"
import productRoutes from "./routes/products.js"
import merchantRoutes from "./routes/merchants.js"
import Merchant from "./models/merchantModels.js"
import bcrypt from 'bcrypt'

try {
    await db.authenticate();
    console.log("Database connected.....");
} catch (error) {
    console.error("Connection error", error);
}


app.use(express.json())
app.use("/products",productRoutes);
app.use("/merchant",merchantRoutes);



app.listen(3001, ()=>{
   console.log('Server is running on port', 3001)
})