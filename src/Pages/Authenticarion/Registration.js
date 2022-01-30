
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const Registration = () => {

    const { user, registerUser, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        registerUser(loginData?.email, loginData?.password, loginData?.name, navigate);
        e.preventDefault();
    }
    const loginTrue = () => {
        Swal.fire(
            `Success `,
            `Welcome ${user.displayName} `,
            'success'
        )
    }
    return (
        <div className="login container text-center  mx-auto border border-1 mt-5 rounded-3 ">
            <h3 className="mt-3 mb-3 text-start fs-3 ">Create Account</h3>
            <form className="text-start " onSubmit={handleLoginSubmit}>
                <label htmlFor="inputName4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Your name</label>
                <input name='name' type="text" onBlur={handleOnBlur} className="form-control border border-secondary" id="inputName4" />
                <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                <input name='email' onBlur={handleOnBlur} type="email" className="form-control border border-secondary" id="inputEmail4" required />

                <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                <input name='password' onBlur={handleOnBlur} type="password" className="form-control border border-secondary" id="inputPassword4" required />

                {user?.email && loginTrue()}

                <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3">Continue</button>
            </form>
            <p className="text-start mt-2" style={{ fontSize: "13px" }}>Allready registered? <NavLink className="text-decoration-none fw-bold" to="/login">Sign in</NavLink></p>

        </div>
    );
};

export default Registration;