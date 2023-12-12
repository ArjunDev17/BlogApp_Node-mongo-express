import express from "express";
import mongoose from 'mongoose'
const app = express();
mongoose.connect('mongodb+srv://admin:vg2iDOUIb2W94d33@cluster0.lgfuhsd.mongodb.net/BlogApp?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() =>
        console.log("Connected to the database and listning port 5000")
    )
    .catch((err) => console.log(err))