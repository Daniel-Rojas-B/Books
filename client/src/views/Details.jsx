import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = () => {

    const [book, setBook] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api//books/${id}`)
            .then((res) => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const deleteBook = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
    }

    return (
        <>
            <div className="navBar">
                <div className="navBarLeft">
                    <Link to={"/"}><button className="navButton">Catalog</button></ Link>
                    <br />
                    <Link to={"/create"}><button className="navButton">Add Book</button></Link>
                </div>
                <div>
                    <h1>{book.title}</h1>

                </div>
            </div>
            <div className="details">
                <div className="detailsContainer">
                    <h2>{book.title}</h2>
                    <h4 style={{ color: 'grey' }}>By {book.authorName}</h4>
                    <br />
                    <p style={{ color: 'grey' }}>Page count: {book.pageCount}</p>
                    <p style={{ color: book.available ? 'green' : 'red' }}>
                        {book.available ? "Available for borrowing" : "Not available for borrowing"}
                    </p>
                    <br />
                    <button onClick={deleteBook} className="borrowButton">Borrow</button>
                </div>
            </div>
        </>
    )
}

export default Details
