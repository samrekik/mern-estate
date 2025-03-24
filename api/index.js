const express=require('express')
const mongoose=require('mongoose');
const { usersRouter } = require('./routes/userRoute');
const app=express();
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(`database connected`))
.catch((err) => console.log(err));
const port=process.env.PORT
app.use('/',usersRouter)
app.listen(port,()=>{console.log(`server is running in port ${port}`)})