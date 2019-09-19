const authors = require('./models');
const path = require('path')

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
            console.log(req.body)
            authors.findOne({ _id: req.params.id })
            .then(data => {
                data.name = req.body.name;
                data.save();
                console.log("GOT DATA BACK FROM DB")
                console.log(data);
                res.json({success: "success"})})
            .catch(err => {
                console.log("dlnkgsdnglksn");
                res.json({'error': err})})
        },
        deleteAuthor: function (req, res) {
            console.log("***************Delete Author************")
            authors.remove({_id:req.params.id})
            .then(data => res.json({'info': data}))
            .catch(err => res.json({'error': err}))
        },
        reroute: function (req, res) {
            res.sendFile(path.resolve(__dirname, "../public/dist/public/index.html"))
        }
}