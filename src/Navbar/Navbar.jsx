import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="col-lg-6">
                            <NavLink className="navbar-brand" to="/">TenTechnologies</NavLink>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="col-lg-6">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar