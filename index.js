// create an express app
import express from "express";
import bodyParser from "body-parser";
import updateProduct from "./src/dao.js";

const app = express();

const isObjectEmpty = (objectName) => {
  for (let prop in objectName) {
    if (objectName.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

app.use(bodyParser.json());

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  res.status(200).end();
});

app.post("/hook", (req, res) => {
  res.status(200).end();

  let data = {};
  console.log(req.body);
  // if (req.body.hasOwnProperty("Product")) {
  //   data.product_id = req.body.Product.product_id;
  //   data.product_name = req.body.Product.product_name;
  // }
  // if (req.body.hasOwnProperty("store_id")) {
  //   data.store_id = req.body.store_id;
  // }
  // if (req.body.hasOwnProperty("created_at")) {
  //   data.date = req.body.created_at.slice(0, 10);
  // }

  // if (isObjectEmpty(data)) {
  //   console.log("Empty object");
  //   return;
  // }

  // updateProduct(data);
  // console.log(data); // Call your action on the request here
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
