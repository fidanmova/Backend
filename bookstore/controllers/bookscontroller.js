const bookModel = require('../models/book')
const authorModel = require('../models/authors')



const booksHandler = (req, res)=>{
    res.render('mainTemplate', {
        title: "Books",
        content: "books",
        books: bookModel.getAllBooks()
    })
}

const bookHandler = (req, res)=>{
    let book =  bookModel.findBookById(req.params.bookId)
    if(book){
        res.render('mainTemplate', {title: book.title, content: 'book', book: book})
    }else{
        res.status(404).render('mainTemplate', {title: "NOT FOUND", content: '404'})
    }
}


const addBookGetHandler = (req, res)=>{
    res.render('mainTemplate', {title: "Add Book", content: "addBook", authors: authorModel.getAllAuthors()})
}
const addBookPostHandler = (req, res)=>{
    console.log(req.body)
    const book = req.body
    bookModel.saveBook(book).then(()=>{
        //res.redirect('/books')
        res.json({error: null})
    }).catch(er=>{
        //res.status(404).render('mainTemplate', {title: "Book already Exist", content: '404', error: er})
        res.json({error: er})
    })
}


module.exports = {booksHandler, bookHandler, addBookGetHandler, addBookPostHandler}