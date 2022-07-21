const router = require('express').Router();

const { saveStudent, getStudent, getStudentDetails } = require("../controller/control")

router.post('/add', saveStudent);//add student data
router.get('/getStudent', getStudent); //get all student data
router.get('/getStudentDetails', getStudentDetails); //get student data by name


module.exports = router;