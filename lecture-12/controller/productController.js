const products = require('../data/data.js');

const getProducts = (req, res)  => {
    res.json(products);
}

const getProductById = (req, res) => {
    const id=req.params.id;
    const result=products.find(product=>product.id==id);
    if(!result){
        return res.status(404).json({message:'Product not found'});
    }
    
    res.json(result);
}

const searchProducts = (req, res) => {
    const { name, minPrice, maxPrice } = req.query;
    let filteredProducts = products;

    if (name) {
        filteredProducts = filteredProducts.filter(product => product.name.includes(name));
    }

    if (minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    }

    if (maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    res.json(filteredProducts);
}

const createProduct = (req, res) => {
    const product=req.body;
    products.push({ id: products.length + 1, ...product });
    res.status(201).json(product);
}

const updateProduct = (req, res) => {
    const id=req.params.id;
    const result=products.find(product=>product.id==id);
    if(!result){
        return res.status(404).json({message:'Product not found'});
    }
    const productIndex=products.indexOf(result);
    products[productIndex]={ ...result, ...req.body };
    res.json(products[productIndex]);
}

const deleteProduct = (req, res) => {
    const id=req.params.id;
    const result=products.find(product=>product.id==id);
    if(!result){
        return res.status(404).json({message:'Product not found'});
    }
    const productIndex=products.indexOf(result);
    products.splice(productIndex, 1);
    res.json({message:'Product deleted successfully'});
}

module.exports = {
    getProducts,
    getProductById,
    searchProducts,
    createProduct,
    updateProduct,
    deleteProduct
};