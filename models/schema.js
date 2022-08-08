const mongoose = require('mongoose');
//branches -> projectList -> projects

var project = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tech_stack: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link:{
        type: URL,
        required: false
    },
    last_modified: {
        type: Date,
        required: true
    }
})

var projectList = new mongoose.Schema({
    branch: {
        type: String,
        required: true,
        projects: [project]
    }
})

module.exports = mongoose,model('projectSchema', projectList, 'List')