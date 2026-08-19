const express=require('express');
const app=express();
const PORT=3000;

app.get('/students/:id', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    console.log(req.params.id);
    res.send('Hello World');
});

app.get('/students', (req, res) => {
    console.log(req.url);
    console.log(req.query);
    res.send('List of students');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});