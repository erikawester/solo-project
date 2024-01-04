//get access to express and the path
const express = require("express");
const app = express();
//connecting to local host 3000
const path = require("path");
const port = 3000;
//importing middleware functions
const restaurantController = require("./controllers/restaurantController");

//to connect to database / import mongoose
const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/Restaurants";
//connect your database
mongoose.connect(mongoURI);

//anything that comes into express, unpackage it
app.use(express.json());
//don't break my API connection
app.use(express.urlencoded());

//all get requests/ post / update

app.get("/", (req, res) => {
  res.send("Express is working:D");
});

app.post("/addRestaurant", restaurantController.addRestaurant, (req, res) => {
  console.log("hi");
  res.sendStatus(200);
  //.status().json()
});

// get request and then in middleware find 


// statically serve everything in the build folder on the route '/dist'
app.use("/build", express.static(path.join(__dirname, "../dist")));

// add error handeling!

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//how can I update it
//how can I add it
//how can I delete it

module.exports = app;
