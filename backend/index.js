import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './route/routes.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/users', route);

const PORT = process.env.PORT || '8080';
const URL ='mongodb://admin:admin2022@cluster0-shard-00-00.fak9x.mongodb.net:27017,cluster0-shard-00-01.fak9x.mongodb.net:27017,cluster0-shard-00-02.fak9x.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-u03mx9-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    app.listen(PORT, () => 
        console.log(`server is running succesfully on Port: ${PORT}`))

}).catch(error => {
    console.log('Error:' , error.message);
})

