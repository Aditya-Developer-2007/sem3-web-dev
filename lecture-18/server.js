const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let age=16
    try{
        if(age<=18){
            throw new Error("Age must be less than 18");
        }else{
            res.send('Hello World!');
        }
    } catch (error) {
        next(error);
    }
});

app.use((req, res) => {    //Invalid route handler middleware
    res.status(404).send({
        success: false,
        message: 'Route not found'
    });
});

app.use((err, req, res, next) => {   //Error handling middleware
    res.status(400).send({
        success: false,
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
