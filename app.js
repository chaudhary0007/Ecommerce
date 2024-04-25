const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>HI</h1>");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
// import express from 'express';
// import bodyParser from 'body-parser';
// const app = express();
// app.use(bodyParser.json());
// app.get('/',(req,res) => {
//     res.send("Welcome to Node Babel")
// })
// app.listen(5000,() => {
//      console.log(`app is listening to port 5000`);
// })
