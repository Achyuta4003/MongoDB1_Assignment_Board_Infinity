const router = require('express').Router();

const { saveProduct, getProduct } = require("../controller/control")

router.post('/add', saveProduct);//add product data
router.get('/getAll', getProduct); //get all product data


module.exports = router;