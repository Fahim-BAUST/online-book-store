import React from 'react';
import Font from 'react-font';
import { NavLink } from 'react-router-dom';
import 'animate.css';
const Header = () => {
    return (
        <div className="sticky-top shadow ">
            <Font family="Zen Antique">


                <nav style={{ backgroundColor: "#E0FFFF" }} className="navbar bg-opacity-10 navbar-expand-lg navbar-light animate_animated animate__fadeInDown ">
                    <div className="container-fluid">
                        <NavLink
                            className="navbar-brand "
                            to="/home"
                        >
                            <img style={{ width: "130px", height: "40px", borderRadius: "20px" }} className="img-fluid" src="https://i.ibb.co/cyRQvCT/coollogo-com-269541991.gif" alt="" />
                        </NavLink>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link "
                                        to="/home"
                                        activeStyle={{
                                            fontWeight: "bolder"
                                        }}
                                    >
                                        <i className="fas fa-home"></i>   Home
                                    </NavLink>

                                </li>
                                <li className="nav-item">

                                    <NavLink
                                        className="nav-link "
                                        to="/Books"

                                        activeStyle={{
                                            fontWeight: "bolder"

                                        }}
                                    >
                                        <i className="fas fa-book"></i>   Books
                                    </NavLink>
                                </li>
                                <li className="nav-item">

                                    <NavLink
                                        className="nav-link "
                                        to="/about"

                                        activeStyle={{
                                            fontWeight: "bolder"
                                        }}
                                    >
                                        <i className="fas fa-users"></i> About us
                                    </NavLink>
                                </li>


                            </ul>
                            <form className="d-flex align-items-center">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            activeStyle={{
                                                fontWeight: "bolder"
                                            }}
                                            to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-tasks"></i> Check Orders
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <NavLink
                                                    className="nav-link text-dark dropdown-item"
                                                    to="/myOrder"

                                                    activeStyle={{
                                                        fontWeight: "bolder",

                                                    }}
                                                >
                                                    My order
                                                </NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            activeStyle={{
                                                fontWeight: "bolder"
                                            }}
                                            to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-tasks"></i> Manage
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <NavLink
                                                    className="nav-link text-dark dropdown-item"
                                                    to="/allOrder"
                                                    activeStyle={{
                                                        fontWeight: "bolder"

                                                    }}
                                                >
                                                    All order
                                                </NavLink>

                                            </li>
                                            <li>
                                                <NavLink
                                                    className="nav-link text-dark dropdown-item"
                                                    to="/addBook"
                                                    activeStyle={{
                                                        fontWeight: "bolder"

                                                    }}
                                                >
                                                    Add Book
                                                </NavLink>


                                            </li>

                                        </ul>
                                    </li>
                                </ul>

                            </form>
                            <form className="d-flex align-items-center">

                                <NavLink
                                    className="nav-link text-warning "
                                    to="/cart"
                                >
                                    <i className="fas fa-cart-arrow-down fs-2 fw-bold"></i>
                                </NavLink>

                                {/* <img style={{ width: "35px" }} className="img-fluid rounded-circle" src='' alt="" /> */}
                                <NavLink to="/login"><button className="btn btn-outline-success" type="submit"><i className="fas fa-sign-in-alt"></i> Login</button></NavLink>
                            </form>
                        </div>
                    </div>
                </nav>
            </Font>
        </div>
    );
};

export default Header;