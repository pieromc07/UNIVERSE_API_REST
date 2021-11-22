const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express()

const router = require('./routes/router')

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);