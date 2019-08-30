const products = require("../products");

const getProduct = (req, res) => {
  for (let i = 0; i < products.length; i++) {
    if (parseInt(req.params.id) === products[i].id) {
      return res.status(200).send(products[i]);
    } 
  }
  res.status(500).send('Item not in the list')
};



module.exports = getProduct;
