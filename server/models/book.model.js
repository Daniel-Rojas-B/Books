import {model, Schema} from 'mongoose';

// {
//     "bookName":"crime and punishment",
//     "author":"fiodor",
//     "pages":"700"    
// }

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Book name is required!"],
            minlength: [2, "Book name must be at least 2 characters long!"],
            maxlength: [255, "Book name must be less than 255 characters long!"]
        },
        authorName: {
            type: String,
            required: [true, "Author name is required!"],
            minlength: [5, "Author name must be at least 5 characters long!"],
            maxlength: [255, "Author name must be less than 255 characters long"]
        },
        pageCount: {
            type: Number,
            required: [true, "Number of pages is required!"],
            min: [1, "Number of pages must be at least 1!"]
        },
        available: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
