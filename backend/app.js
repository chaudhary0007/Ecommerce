// const express = require("express");
// const bodyParser = require("body-parser")
import express from 'express';
import bodyParser from "body-parser";
import router from "./routes/app.route.js";
import loggerMiddleware from './middleware/app.log.js';

const app = express();
const PORT = 3000;
app.use(loggerMiddleware);
app.use(bodyParser.json());


app.listen(PORT, (error) => {
  if (!error)
  console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
})

app.use('/', router)
export default app;
// const router = express.Router();
// router.get("/", (req, res) => {
  //   res.send("Hello")
  //   console.log('Method :',req.method,'Path:',req.path)
  // });
  // export default router;