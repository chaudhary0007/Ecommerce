import app from "./app";
import * as dotenv from "dotenv";
import connectdb from "./connection.js";

dotenv.config(); 
// routes


const port = process.env.PORT || 5000;

connectdb()
  .then(() => {
    console.log("database connection !!");
    app.listen(port, () => {
      console.log("The server is running of localhost:" + port);
    });
  })
  .catch((err) => console.log("ERROR: " + err.message));
