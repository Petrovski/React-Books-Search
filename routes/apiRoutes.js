const axios = require("axios")
const books = require("../controllers/booksController");

module.exports = function (app) {

    console.log("api routes has loaded")
    app.get("/api/books/:query", (req, res) => {
        let query = req.params.query
        let url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=15"
        console.log(`url ${url}`)
        axios.get(url)
            .then(function (response) { res.json(response.data.items) })
    })


    app.post("/api/savebook", (req, res) => {

        let book = req.body
        console.log(`title: ${book.title}`)
        console.log(`authors: ${book.authors}`)
        console.log(`image: ${book.image}`)
        console.log(`link: ${book.href}`)
        console.log(`category: ${book.category}`)

        let cb = function (response) { res.json(response) }
        books.create(book, cb)
    })

    app.get("/api/mybooks", (req, res) => {

        let cb = function (response) { res.json(response) }
        books.findAll(cb)
    })

    app.get("/api/updateBooks", (req, res) => {

        let cb = function (response) { res.json(response) }
        books.count(cb)
    })

    app.delete("/api/removebook/:id", (req, res) => {

        let book = req.params.id,
            cb = function (response) { res.send(response) }
        console.log(`deleted book ID: ${book}`)
        books.delete(book, cb)
    })
}