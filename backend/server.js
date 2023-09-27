import express from "express";
import dotenv from 'dotenv';
import path  from "path";


dotenv.config();
import cookieParser from "cookie-parser";

import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";

import connectDB from "./config/db.js";

const port = process.env.PORT || 8000;
import userRoutes from './routes/userRoutes.js';


connectDB();

const app = express ();


// allows you to send raw json in form format
app.use (express.json());
app.use (express.urlencoded({extended: true}))

app.use(cookieParser());

app.use ('/api/users', userRoutes)

if (process.env.NODE_ENV === 'production'){
    const __dirname =  path.resolve ();
    //making dist folder static
    app.use(express.static(path.join(__dirname, 'frontend/dist')));

    //incase the route is not found load index.html
    app.get('*', (req, res ) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get ('/', (req, res) => res.send ('Server is ready'));
}



app.use(notFound);
app.use(errorHandler);  
 

app.listen (port, () => console.log ( `Server started on port ${port}`));