const express = require('express');
const bodyParser = require('body-parser')
const app = express();
//const Temperature = require('./model/temperture');
//const mongoose = require('mongoose');

app.use(bodyParser.json());
//const MONGOURL = (process.ENV && process.ENV.PORT) || "mongodb://localhost:27017/final_homework" 
const PORT = (process.ENV && process.ENV.PORT) || 3000;

//mongoose.connect(MONGOURL);

const temperaturesLog = [];

app.get('/temperature', async (req, res) => {
    try {
        res.json({temperaturesLog});   
    } catch (error) {
        res.send(500);
    }
    
});

app.post('/temperature', async (req, res) => {

    try {
        const newTemperature = {
            temperature: temperature,
            _id: new Date().getTime(),
        }
        temperaturesLog.push(newTemperature);
        response.json(temperaturesLog);
        res.send(201);
    } catch (error) {
        console.log(error);
        res.send(500);
    }
});

app.listen(PORT, () => {
    console.log('estou escutando na porta: '+ PORT);
});