const express = require('express');
require('dotenv').config();
const mongoose= require('mongoose');
const cors = require('cors');

const app=express();
const taskRoutes=require('./routes/taskRoute');


app.use(cors());
//Midleware it is the lextra layer for API 
app.use((req,res,next)=>{
    console.log("path : "+req.path+"method : "+req.method);
    next();
})
app.use(express.json());

app.use('/api/tasks',taskRoutes);


  
// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// })

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("DB Connected Successfully listening..."+process.env.PORT);
    });
}).catch((err)=>console.log(err));
