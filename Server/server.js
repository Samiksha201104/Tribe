import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import http from 'http'
import { connectDb } from './db.js'
import userRouter from './Routes/userRoutes.js'
const app=express()
const server=http.createServer(app) //So when you pass app to http.createServer, it tells Node:“Hey, whenever an HTTP request comes in, give it to this Express app to handle.” also required by socket.io
//middleware set up
app.use(express.json({limit:'4mb'})) // so we can accept images of maximum isze 4mb
app.use(cors())
//routes setup
app.use('/api/status',(req,res)=>
    res.send('server is live')
)
app.use("/api/auth",userRouter)
await connectDb()
const PORT =process.env.PORT || 5000

server.listen(PORT,()=>{console.log("server is listening at port:"+PORT)})