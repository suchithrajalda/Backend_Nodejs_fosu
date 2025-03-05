const express=require("express");
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const venderRoutes=require('./routes/vendorRoutes')
const bodyParser=require('body-parser');
const firmRoutes=require('./routes/firmRoute')
const productRoutes=require('./routes/productRoute');
const cors=require("cors");
const path=require('path');



const app=express();

const port=4001;
dotEnv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongodb connected successfully"))
.catch((error)=>console.log(error))

app.use(bodyParser.json());
app.use('/vendor',venderRoutes);
app.use('/firm',firmRoutes)
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'))

app.listen(port,()=>{
    console.log(`server started and running at ${port}`)
})

app.use('/home',(req,res)=>{
    res.send("<h1>Welcome to Food World")

})
