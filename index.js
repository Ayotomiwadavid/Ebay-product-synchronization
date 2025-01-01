const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.port

app.use(bodyParser.urlencoded({extended: false}))

app.listen(port || 8000, () => {
    console.log('App is listening on port ' + port);
})