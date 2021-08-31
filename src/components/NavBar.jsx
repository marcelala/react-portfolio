import React from "react";
import WOW from "wow.js";
import { Link } from 'react-scroll';

import Background from "./Background.jsx";
import Brand  from "../assets/img/MF.png"


export default function NavBar() {
	
    return(
            <nav id="navbar" className="navbar">
					<div className="navbar__box">
						<div className="navbar__navbar-brand">
							 <img src={Brand} className="navbar__navbar-brand-logo" 
							 alt="M F logo" 
							 />
						</div>
						<button
							className="navbar__toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar__toggler-icon"/>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar__nav">
								<Link 
								className="navbar__nav-link"
 								activeClass="active" to="Projects" spy={true} smooth={true} duration={1000}>
									Projects
								</Link>
								<Link 
								className="navbar__nav-link"
 								activeClass="active" to="About" spy={true} smooth={true} duration={1000}>
									About
								</Link>
                                <Link 
								className="navbar__nav-link"
 								activeClass="active" to="Skills" spy={true} smooth={true} duration={1000}>
									Skills
								</Link>
								<Link 
								className="navbar__nav-link"
 								activeClass="active" to="Contact" spy={true} smooth={true} duration={1000}>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</nav>
    )

}