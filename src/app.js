import express from "express";  
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public")) //public is only folder name

import crptoRoute from "./routers/cryptoRoutes.js"


app.get('/', (req, res) => {
    res.send('Welcome to your deployed app!');
});

app.use('/api/v1/crypto',crptoRoute)

export {app}