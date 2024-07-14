console.log("Starting sever....")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const {
    sendMessage,

} = require(`${__dirname}/controller.js`)

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(cors())

app.use(cors({
    origin: 'http://127.0.0.1:3000', // Update this for your production URL later
}));

app.post('/api/send-message', sendMessage);



app.use((err, req, res, next) => {
    res.status(500).send({ msg: 'Internal Server Error' })
})

module.exports = app;


