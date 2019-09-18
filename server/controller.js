const authors = require('./models');

module.exports = {
    allAuthors: function (req, res) {
        console.log("***************Get All Authors************")
        authors.find()
            .then(data => res.json({'info': data}))
            .catch(err => res.json({'error': err}))
        },
        oneAuthor: function (req, res) {
            console.log("***************Get One Author************")
            authors.findOne({_id: req.params.id})
            .then(data => res.json({'info': data}))
            .catch(err => res.json({'error': err}))    
        },
        createAuthor: function (req, res) {
            console.log("***************Create Author************")
            authors.create(req.body)
            .then(data => res.json({'info': data}))
            .catch(err => res.json({'error': err}))
        },
        editAuthor: function (req, res) {
            console.log("***************Edit Author************")
            authors.updateOne({ _id: req.params.id }, req.body)
            .then(data => res.json({'info': data}))
            .catch(err => res.json({'error': err}))
        },
        deleteAuthor: function (req, res) {
            console.log("***************Delete Author************")
            authors.remove({_id:req.params.id})
            .then(data => res.json({'info': data}))
            .catch(err => res.json({'error': err}))
    },
}