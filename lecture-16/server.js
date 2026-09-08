const express = require('express');
const app = express();
const morgan=require('morgan');
const PORT = 3000;

app.use(morgan('dev'));

const logMiddleware = (req, res, next) => { //custom middleware function to log request method and URL
    console.log(`${req.method} ${req.url}`);
    res.send("Request logged");
    next();
}

// const loggerMiddleware = (req, res, next) => { //custom middleware function to log request method and URL
//     console.log(`${req.method} ${req.url} new Date: ${new Date()}`);
//     next();
// }

const apicheckMiddleware = (req, res, next) => { //custom middleware function to check for API key in request headers
    if (req.query.API_KEY== '12345')
    {
        next();
    }else{
        res.status(403).json({ message: 'Forbidden' });
    }    
}

// app.use(logMiddleware);
// app.use(apicheckMiddleware);

app.get("/", (req, res) => {
    console.log("hello world")
    res.send("Hello World");
});

app.get("/students",logMiddleware, apicheckMiddleware, /*loggerMiddleware,*/ (req, res) => {
    console.log("hello students")
    res.send("Hello Students");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});