const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require("./routes/Middleman")

dotenv.config()

app.use(cors({
    origin: ["https://gamingsetup-app.netlify.app/"]
}))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB)


//routes
app.use("/routes",userRouter)





app.listen(process.env.PORT,()=>{
    console.log(`Server is running`)
})

