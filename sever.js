
//declare variables
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8500;
require('dotenv').config();
const cors = require('cors');
const Projects = require('./models/schema');

//Setting middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {console.log('connected to db!')},
    app.listen(PORT, () => {
        console.log(`Server is running on Port: ${PORT}`)
    })
)

//GET method check this and change the ejs
app.get('/', async (req, res) => {
    try{
        Projects.find({}, (err, List) => {
            res.render('index.ejs', {
                projectsList: List,
            })
        })
    }
    catch(err){
        res.status(500).send({message: err.message})
    }
})
