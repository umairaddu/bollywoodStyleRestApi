import express from "express"
const app=express()
import dotenv from 'dotenv'
import userRouter from "./routers/userRegisterRouter.js"
import dbConnect from "./db/connection.js"
dotenv.config()
import clouthRouter from "./routers/clouthRoute.js"
import morgan from "morgan"

import cors from 'cors'//backend connect to frantend
// Use CORS middleware
app.use(cors());
app.use(morgan('dev'))





const port=process.env.PORT
const dburl=process.env.DBURL
const dbname=process.env.DBNAME  

dbConnect(dburl,dbname)

app.use(express.json())

app.use('/user',userRouter)
app.use('/clouth',clouthRouter)



app.listen(port,()=>{
console.log(`server started at port number ${port}`)
})
