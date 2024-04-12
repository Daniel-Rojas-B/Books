import { Router } from "express"
import { createBook, getAllBooks, getBookById, updateOneBook, deleteBookById } from "../controllers/book.controller.js";

const router = Router();

router.route("/books")
    .post(createBook)
    .get(getAllBooks)

router.route("/books/:id")
    .get(getBookById)
    .put(updateOneBook)
    .delete(deleteBookById)


export default router;