const books = require('../data/books.json')[0].books
const authors = require('../data/authors.json')
const fs = require('fs')
const path = require('path')

/**
 * 
 * @param {Object} book as an Object
 * @returns 
 */
const saveBook = (book)=>{
    return new Promise((resolve, reject)=>{
        // assign an id to the book
        book.id = books.length>0? books[books.length - 1].id +1:0
        //Search for the author, maching authorId
        let authorName = authors.find(au=> au.id === book.authorId).name
        book.author = authorName
        // ready to store
        books.push(book)
        // to follow the same strucure books.json file
        let contentFile = [{books: books}]

        fs.writeFile(path.join(__dirname, "../data/books.json"), JSON.stringify(contentFile), error=>{
            if(error){
                //res.json(error)
                reject(error)
            }else{
                //res.redirect('/books')
                resolve()
            }
        })
    })
}

const findBookById = (bookId)=>{

}




module.exports = {saveBook}