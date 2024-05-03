import express from "express";
import bodyParser from "body-parser";
import router from "./routes/app.route.js";
// import loggerMiddleware from "./middleware/app.log.js";
import morgan from "morgan";

const app = express();
const PORT = 3000;

// you can place your middleware here..
app.use(morgan("dev"));
// app.use(loggerMiddleware);
app.use(bodyParser.json());

// then place your routes
app.use("/", router);

// then, finally start listening of server
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

export default app;
