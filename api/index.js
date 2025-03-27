const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose');
const { usersRouter } = require('./routes/userRoute');
const { authRoute } = require('./routes/authRoute');
const app=express();
 app.use(express.json());
 app.use(cors())
 app.use(express.urlencoded({json:false}))
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(`database connected`))
.catch((err) => console.log(err));
const port=process.env.PORT
app.use('/',usersRouter)
app.use('/api',authRoute)
app.listen(port,()=>{console.log(`server is running in port ${port}`)})