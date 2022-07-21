const router = require('express').Router();

const { saveQuote, getQuote } = require("../controller/control")

router.post('/add', saveQuote);//add quote data
router.get('/getAll', getQuote); //get all quote data


module.exports = router;