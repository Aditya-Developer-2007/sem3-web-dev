const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
    { id: 1, name: 'laptop', price: 100000 },
    { id: 2, name: 'mouse', price: 200000 },
    { id: 3, name: 'keyboard', price: 30000 },
];

//Read

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    // const product= products.find(p => p.id === parseInt(req.params.id));
    // if (!product) {
    //     return res.status(404).json({ message: 'Product not found' });
    // }
    const id=req.params.id;
    const result=products.find(product=>product.id==id);
    if(!result){
        return res.status(404).json({message:'Product not found'});
    }
    
    res.json(result);
})

//Create

app.post('/api/products', (req, res) => {
    // const { name, price } = req.body;
    // const newProduct = {
    //     id: products.length + 1,
    //     name,
    //     price,
    // };
    // products.push(newProduct);
    // res.status(201).json(newProduct);
    const product=req.body;
    products.push({ id: products.length + 1, ...product });
    res.status(201).json(product);
});

//Update
app.put('/api/products/:id', (req, res) => {
    const id=req.params.id;
    const result=products.find(product=>product.id==id);
    if(!result){
        return res.status(404).json({message:'Product not found'});
    }
    const productIndex=products.indexOf(result);
    products[productIndex]={ ...result, ...req.body };
    res.json(products[productIndex]);
});

//delete
app.delete('/api/products/:id', (req, res) => {
    const id=req.params.id;
    const result=products.find(product=>product.id==id);
    if(!result){
        return res.status(404).json({message:'Product not found'});
    }
    const productIndex=products.indexOf(result);
    products.splice(productIndex, 1);
    res.json({message:'Product deleted successfully'});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});