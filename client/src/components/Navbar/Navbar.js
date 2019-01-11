import React from "react";
import {NavLink} from "react-router-dom";


const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink to="/" exact className="navbar-brand">Movies App</NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
           
            <li className="nav-item">
                <NavLink to="/login" exact className="nav-link" activeClassName="active">Log in</NavLink>
            </li>   
            
            </ul>
        </div>
    </nav>
);

export default Navbar;