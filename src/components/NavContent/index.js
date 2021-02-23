import React from 'react';

import { Link } from "react-router-dom";

import logoImg from '../../assets/img/logo.png';

function NavContent(){
    return(
        <nav className="container navbar navbar-expand-lg main-navbar-nav navbar-light">
            <Link className="navbar-brand" to="/"><img id="logo" src={logoImg}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-items-center ml-auto mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Trabalhos">Trabalhos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Galeria">Galeria</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contato">Contato</Link>
                    </li>
                </ul>
                <div className="social-icons-header">
					    <a href="https://www.linkedin.com/in/felipe-vertedor-franzoni-952841186/?originalSubdomain=br" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    );
}
export default NavContent;
