import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
    <>
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid ">
                        <NavLink exact className="navbar-brand" to="/">CourseHub</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">  
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink  to="/" exact  className= {({ isActive }) => "nav-link px-4" + (isActive ? " menu-active" : "")}aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/service"  className={({ isActive }) => "nav-link px-4" + (isActive ? " menu-active" : "")}>Service</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/about"  className={({ isActive }) => "nav-link px-4" + (isActive ? " menu-active" : "")}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/contact"  className={({ isActive }) => "nav-link px-4" + (isActive ? " menu-active" : "")}>Contact</NavLink>
                                </li>
                            </ul>
                            </div>
                        
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
    );
};

export default Navbar;