const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require("./routes/Middleman")

dotenv.config()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGODB)


//routes
app.use("/routes",userRouter)





app.listen(process.env.PORT,()=>{
    console.log(`Server is running`)
})

