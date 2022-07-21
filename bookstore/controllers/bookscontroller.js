const books = require('../data/books.json')[0].books


const booksHandler = (req, res)=>{
    res.render('mainTemplate', {
        title: "Books",
        content: "books",
        books: books
    })
}



module.exports = {booksHandler}