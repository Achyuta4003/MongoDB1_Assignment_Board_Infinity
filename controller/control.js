const Product = require("../model/product");

//add product
exports.saveProduct = async (req, res) => {
    const product = new Product({
        productName: req.body.productName,
        price: req.body.price
    })

    try {
        const data = await product.save()
        res.status(200).json({
            result: "success"
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}


//get product 
exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}