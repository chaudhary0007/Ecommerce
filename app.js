const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const PORT = 3000;
const router = express.Router();

app.use(bodyParser.json());
router.get("/", (req, res,next) => {
  res.send("Hello")
  console.log('Method :',req.method,'Path:',req.path)
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
})

app.use('/', router)
