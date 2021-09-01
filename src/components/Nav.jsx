import React from "react";
import { Link } from "react-scroll";
import Brand from "../assets/img/logos/MF.png";

export default function Nav() {
	return (
		<nav id="navbar" className="navbar">
			<div className="navbar__box">
				<div className="navbar__navbar-brand">
					<img
						src={Brand}
						className="navbar__navbar-brand-logo"
						alt="M F logo"
					/>
				</div>
				<div className="navbar__nav">
					<Link
						className="navbar__nav-link"
						activeClass="active"
						to="Projects"
						spy={true}
						smooth={true}
						duration={1000}>
						Projects
					</Link>
					<Link
						className="navbar__nav-link"
						activeClass="active"
						to="About"
						spy={true}
						smooth={true}
						duration={1000}>
						About
					</Link>
					<Link
						className="navbar__nav-link"
						activeClass="active"
						to="Skills"
						spy={true}
						smooth={true}
						duration={1000}>
						Skills
					</Link>
					<Link
						className="navbar__nav-link"
						activeClass="active"
						to="Contact"
						spy={true}
						smooth={true}
						duration={1000}>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
