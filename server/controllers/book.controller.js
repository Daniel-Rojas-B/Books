import Book from '../models/book.model.js';
// Create new book
async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
// Retrieve all books from the collection
async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
// Retrieve a single book from the collection
async function getBookById(req, res) {
    try {
        console.log(req.params.id)
        const oneBook = await Book.findById(req.params.id);        
        res.json(oneBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function updateOneBook(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function deleteBookById(req, res) {
    try {
        console.log(req.params.id)
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createBook, 
    getAllBooks,
    getBookById,
    updateOneBook,
    deleteBookById
};

