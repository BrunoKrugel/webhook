// create an express app
import express from "express";
import bodyParser from "body-parser";
import updateProduct from "./src/dao.js";

const app = express();

app.use(bodyParser.json());

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  res.status(200).end();
});

app.post("/hook", (req, res) => {
  res.status(200).end(); // Responding is important
  let data = {
    product_id: req.body.Product.product_id,
    product_name: req.body.Product.product_name,
    date: req.body.created_at.slice(0, 10),
  };
  updateProduct(data);
  //console.log(data); // Call your action on the request here
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
