import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const { user } = useSelector(state => state.userSlice);

    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand ml-3">MCQ APP</Link>
            <div className="float-right d-flex navLink">
                {user.type === "admin" && <Link to="/users">Users</Link>}
                <Link to="/add">Add Question</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
    )

}

export default Header;