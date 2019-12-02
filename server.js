const express = require('express');
const bodyParser = require('body-parser')
const app = express();
//const Temperature = require('./model/temperture');
//const mongoose = require('mongoose');

app.use(bodyParser.json());
//const MONGOURL = (process.ENV && process.ENV.PORT) || "mongodb://localhost:27017/final_homework" 
const PORT = (process.env && process.env.PORT) || 5000;

//mongoose.connect(MONGOURL);

const temperaturesLog = [];

app.get('/temperaturesLog', async (req, res) => {
    try {
        res.json({temperaturesLog});   
    } catch (error) {
        res.send(500);
    }
    
});

app.post('/temperaturesLog', async (req, res) => {

    try {
        const { value } = req.body;
        const newTemperature = {
            value: value,
            _id: new Date().getTime(),
        }
        temperaturesLog.push(newTemperature);
        res.json(temperaturesLog);
        res.send(201);
    } catch (error) {
        console.log(error);
        res.send(500);
    }
});

app.listen(PORT, () => {
    console.log('estou escutando na porta: '+ PORT);
});