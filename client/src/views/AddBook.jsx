import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [available, setAvailable] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const authorNameHandler = (e) => {
        setAuthorName(e.target.value);
    }
    const pageCountHandler = (e) => {
        setPageCount(e.target.value);
    }
    const availableHandler = (e) => {
        setAvailable(e.target.checked);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/books',{
            title,
            authorName,
            pageCount,
            available
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <>
            <div className="navBar">
                <div className="navBarLeft">
                <Link to={"/"}><button className="navButton">Catalog</button></Link>
                    <br />
                    <button className="navButton">Add Book</button>
                </div>
                <div>
                    <h1>Add a Book</h1>
                </div>
            </div>
            <div className="addBook">
                <div>
                    <form onSubmit={submitHandler} className="form">
                    <label className="label" htmlFor="title">Title</label>
                    <br />
                    <input className="input" type="text" id="title" value={title} onChange={titleHandler}/>
                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                    <br />
                    <label className="label" htmlFor="authorName">Author Name</label>
                    <br />
                    <input className="input" type="text" id="authorName" value={authorName} onChange={authorNameHandler} />
                    {errors.authorName && <p style={{ color: 'red' }}>{errors.authorName.message}</p>}
                    <br />
                    <label className="label" htmlFor="pageCount">Page Count</label>
                    <br />
                    <input className="input" type="number" id="pageCount" value={pageCount} onChange={pageCountHandler}  />
                    {errors.pageCount && <p style={{ color: 'red' }}>{errors.pageCount.message}</p>}
                    <br />
                    <label className="label" htmlFor="available">Is it available?</label>
                    <input className="input" type="checkbox" id="available" checked={available} onChange={availableHandler} />
                    <br />
                    <br />
                    <input type="submit" className="navButton" value="Add Book!" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddBook