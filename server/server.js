const express = require("express");
const app = express();
const SERVER_PORT = 5001;
// const products = require("../products.json");
const getProducts = require('./getProducts')

app.get('/api/products', getProducts)


app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`);
});
