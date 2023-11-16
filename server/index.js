const express=require('express')
const dotenv=require('dotenv')
const app=express()
const cors = require('cors')

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(
    express.urlencoded({ extended: true })
);
const PORT=process.env.PORT;
const userRoutes=require('./routes/userRoutes')
app.use('/api/users',userRoutes)

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})
const connectDb=require('./database-config/dbConnection')
connectDb()