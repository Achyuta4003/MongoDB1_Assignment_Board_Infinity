const express = require('express');
const app = express();
const PORT =  3000;
const bodyParser = require('body-parser')
const connectDb = require('./config')
const studentRoutes = require('./routes/studentRoute')

//database connection
connectDb();

//body parser setup
app.use(bodyParser.json())

//route setup
app.use('/student',studentRoutes)

//handle bad request
app.use((req, res) => {
    res.status(404).json({
        error: "bad request"
    })
})

//server create and listning
app.listen(PORT, () => console.log(`server listining on Port ${PORT}`));