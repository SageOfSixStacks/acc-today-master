const Products = require("../models/product.model")



async function getAllProducts(req, res) {
    try {
        const products = await Products.find();
        res.status(200).json({products})
    } catch(error) {
        throw new Error("sever error")
    }
};

module.exports = {getAllProducts};