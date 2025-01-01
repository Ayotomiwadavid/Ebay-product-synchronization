const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.port

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', () => {
    axios.get('https://api.ebay.com/sell/inventory/v1/inventory_item?limit=2&offset=0');
});

app.listen(port || 8000, () => {
    console.log('App is listening on port ' + port);
})