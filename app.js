const express = require("express");
// const path = require("path");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1><a href="/api/products">products</a>`);
  // adding to static
  // SSR
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
  console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does not exist");
  }
  res.json(singleProduct);
});

// app.get('*', (req, res) => {
// res.status(404).send('Resource not found')
// });

app.listen(5000, () => {
  console.log("Server listeneing port 5000....");
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
