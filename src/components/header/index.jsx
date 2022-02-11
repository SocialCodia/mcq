import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand ml-3">MCQ APP</Link>
            <div className="float-right d-flex navLink">
                <Link to="/add">Add Question</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    )

}

export default Header;