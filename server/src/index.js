import express from 'express';
import mongoose from 'mongoose'
import 'dotenv/config'
import { connectDB } from './db/index.js';
const app = express(); 


connectDB()
.then(()=>{
    console.log('db connected')
    app.get('/', (req, res)=>{
        res.send('server chal gya h')
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log('MongoDB connection failed')
})


