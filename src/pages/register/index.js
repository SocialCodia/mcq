import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { doRegister } from "../../http";

const RegisterPage = () => {

    const inittialState = {
        name: localStorage.getItem('name'),
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
        const { name, email, password } = formData;
        if (!name) return toast.error('Enter Name');
        if (!email) return toast.error('Enter Email Address');
        if (!password) return toast.error('Enter Password');
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);
        setLoading(true);
        const res = await doRegister(formData);
        setLoading(false);
        if (res.success) {
            toast.success(res.message);
        }

    }

    return (
        <div className="container">
            <div className="row formContainer">
                <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4">
                    <div className="card formCard">
                        <form onSubmit={onSubmit}>
                            <div className="card-body">
                                <h5>Register an account to continuee...</h5>
                                <div className="form-group mb-4 mt-4">
                                    <input name="name" onChange={inputEvent} readOnly={loading} value={formData.name} type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group mb-4">
                                    <input name="email" onChange={inputEvent} readOnly={loading} value={formData.email} type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input name="password" onChange={inputEvent} readOnly={loading} value={formData.password} type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group mt-4 ">
                                    <button disabled={loading} className="btn btn-primary w-100">Register</button>
                                </div>
                                <div className="d-flex mt-4 justify-content-center">
                                    <p>Already have an account? </p>
                                    <Link to="/login">Login</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RegisterPage;