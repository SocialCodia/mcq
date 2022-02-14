import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doLogin } from "../../http";
import { setAuth } from "../../store/user-slice";

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inittialState = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password')
    }

    const [formData, setFormData] = useState(inittialState);
    const [loading, setLoading] = useState(false);

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setFormData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        if (!email) return toast.error('Enter Email Address');
        if (!password) return toast.error('Enter Password');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setLoading(true);
        const res = await doLogin(formData);
        setLoading(false);
        if (res.success) {
            toast.success('Logged In Successfully');
            dispatch(setAuth(res.data));
            navigate('/');
        }

    }

    return (
        <div className="container">
            <div className="row formContainer">
                <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4">
                    <div className="card">
                        <form onSubmit={onSubmit}>
                            <div className="card-body">
                                <h5>Login to continuee...</h5>
                                <div className="form-group mb-4 mt-4">
                                    <input name="email" onChange={inputEvent} readOnly={loading} value={formData.email} type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input name="password" onChange={inputEvent} readOnly={loading} value={formData.password} type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group mt-4 ">
                                    <button disabled={loading} className="btn btn-primary w-100">Login</button>
                                </div>
                                <div className="d-flex mt-4 justify-content-center">
                                    <p>Don't have an account? </p>
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;