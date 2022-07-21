const Quote = require("../model/quote");

//add quote
exports.saveQuote = async (req, res) => {
    const quote = new Quote({
        quote:req.body.quote,
        author:req.body.author
    })

    try {
        const data = await quote.save()
        res.status(200).json({
            result: "success"
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}


//get quote 
exports.getQuote = async (req, res) => {
    try {
        const data = await Quote.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}