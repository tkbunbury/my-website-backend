console.log("Starting sever....")
const express = require('express');
require('dotenv').config();

const app = express();

const {
    sendMessage,

} = require(`${__dirname}/controller.js`)

app.use(express.json());

app.post('/api/send-message', sendMessage);



app.use((err, req, res, next) => {
    res.status(500).send({ msg: 'Internal Server Error' })
})

module.exports = app;


