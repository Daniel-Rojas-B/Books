import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="navBar">
                <div className="navBarLeft">
                    <button className="navButton">Catalog</button>
                    <br />
                    <Link to={"/create"}><button className="navButton">Add Book</button></Link>
                </div>
                <div>
                    <h1>Book Catalog</h1>
                </div>
            </div>
            <div className="booksTable">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Page Count</th>
                            <th>Available</th>
                            <th>Book Page</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.title}</td>                                    
                                    <td>{book.authorName}</td>
                                    <td>{book.pageCount}</td>
                                    <td>{book.available ? "Yes" : "No" } | <Link to={`/books/${book._id}/update`}> Edit </Link></td>
                                    <td><Link to={`/books/${book._id}/details`}><button className="detailsButton">Book Details</button></Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home
