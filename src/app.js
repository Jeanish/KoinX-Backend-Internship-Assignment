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


app.get('/', (req, res) => {
    res.send('Welcome to your deployed app!');
});


export {app}