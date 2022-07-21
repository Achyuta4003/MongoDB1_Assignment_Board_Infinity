const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentFirstName: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Student', studentSchema)