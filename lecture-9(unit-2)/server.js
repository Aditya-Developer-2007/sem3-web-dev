const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><p>Welcome to our home page</p>');
});

app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1><p>Here is your about page</p>');
});

app.get('/contact',(req,res)=>{
    res.send('<h1>Contact Page</h1><p>Here is your contact page</p>');
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}...`);
});