const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const app = express()

const router = require('./routes/mail/mail.router')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

app.listen(4000, () => {
    console.log("Server on 4000");
})