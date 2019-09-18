const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Authors', { useNewUrlParser: true });

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2}
}, {timestamps: true})

const authors = mongoose.model('authors', AuthorSchema)

module.exports = authors;