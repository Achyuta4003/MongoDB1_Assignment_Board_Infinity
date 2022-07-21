const mongoose = require('mongoose')

const  dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/product')
        .then(() => console.log('connected to database.......'))
        .catch((err) => {
            console.log('connection failed with database')
            throw err;
        })
}

module.exports = dbConnect;