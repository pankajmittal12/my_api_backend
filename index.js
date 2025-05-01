
const express = require('express');

const app = express();

const cors = require('cors');

const indexRouter = require('./Router/router');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/root', indexRouter);

app.listen(1000, () =>{
    console.log("Server is running on port 1000");
})
