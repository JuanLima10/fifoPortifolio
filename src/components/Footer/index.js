import React from 'react';

import { Link } from "react-router-dom";

import logoImg from '../../assets/img/logo.png';


function Footer(){
    return(
        <footer className="footer-content">
		<div className="container footer-inner">

			<div className="footer-three-grid" data-wow-delay="0.66s">
				<div className="column-1-3">
					<img id="logo" src={logoImg}/>
				</div>
				<div className="column-2-3">
					<nav className="footer-nav">
						<ul>
							<Link to="/"><li>Home</li></Link>
							<Link to="/Trabalhos"><li>Trabalhos</li></Link>
							<Link to="/Galeria"><li>Galeria</li></Link>
							<Link to="/Contato"><li>Contato</li></Link>
						</ul>
					</nav>
				</div>
				<div className="column-3-3">
					<div className="social-icons-footer">
					    <a href="https://www.linkedin.com/in/felipe-vertedor-franzoni-952841186/?originalSubdomain=br" target="_blank"><i className="fab fa-linkedin"></i></a>
					</div>
				</div>
			</div>

			<span className="border-bottom-footer"></span>

			<p className="copyright">&copy; 2020 Felipe Vertedor. Todos os direitos reservados. Design by <a href="https://www.instagram.com/juanlima051/" target="_blank">Juan Lima</a>.</p>

		</div>
	</footer>
    );
}

export default Footer;
