const loggerMiddleware = (req, res, next) => {
    console.log("Method: " + req.method + "    PATH: " + req.path);
    next();
  };
  
  export default loggerMiddleware;