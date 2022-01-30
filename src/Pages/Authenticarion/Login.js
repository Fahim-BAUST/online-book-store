import { Box, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    const loginTrue = () => {
        Swal.fire(
            `Success `,
            `Welcome ${user.displayName} `,
            'success'
        )
    }
    return (
        <div>
            <div>

                <div className="login container text-center  mx-auto border border-1 mt-5 rounded-3 ">

                    <h2 className="mt-3 mb-3  fs-3 ">Please Login</h2>
                    {isLoading && <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box>}

                    <form className="text-start " onSubmit={handleLoginSubmit}>
                        <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                        <input name='email' type="email" onBlur={handleOnChange} className="form-control border border-secondary" id="inputEmail4" required />

                        <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                        <input name='password' type="password" onBlur={handleOnChange} className="form-control border border-secondary" id="inputPassword4" required />

                        {user?.email && loginTrue()}

                        <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3 shadow-lg mb-1">Sign in</button>
                    </form>
                    <p className="text-start" style={{ fontSize: "13px" }}>NewUser? <NavLink className="text-decoration-none fw-bold" to="/register">Register</NavLink></p>
                    <button onClick={handleGoogleSignIn} className="btn btn-secondary fw-bold mb-5 shadow-lg" style={{ backgroundColor: "#c29d59", color: "white", border: "none" }}>Google SignIn</button>
                </div>

            </div>

        </div>
    );
};

export default Login;