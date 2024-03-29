// create an express app
import express from "express";
import bodyParser from "body-parser";
import insertLog from "./src/dao.js";

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
  res.status(200).json(req.body).end();

  insertLog(req.body, req.query, req.params, req.headers);
  // console.log(data); // Call your action on the request here
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
