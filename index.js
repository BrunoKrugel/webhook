// create an express app
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  res.status(200).end();
});

app.post("/hook", (req, res) => {
  let data = {
    "product_id": req.body.Product.product_id,
    "product_name": req.body.Product.product_name,
    "date": req.body.created_at,
  }
  console.log(data); // Call your action on the request here
  res.status(200).end(); // Responding is important
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
