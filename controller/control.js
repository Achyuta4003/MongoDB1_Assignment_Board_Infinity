const Student = require("../model/student");

//add student data
exports.saveStudent = async (req, res) => {
    const student = new Student({
        studentFirstName: req.body.studentFirstName,
        collegeName: req.body.collegeName,
        location: req.body.location
    })

    try {
        const data = await student.save()
        res.status(200).json({
            result: "success"
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

//get getStudentDetails 
exports.getStudentDetails = async (req, res) => {
    try {
        const data = await Student.find({ studentFirstName: req.query.name })

        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

//get Student data 
exports.getStudent = async (req, res) => {
    try {
        const data = await Student.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}