import React from "react";
import Brand from "../assets/img/logos/MF.png";

export default function Nav() {
	return (
		<nav className="nav">
			<div className="navbar__box">
				<div className="navbar__navbar-brand">
					<img
						src={Brand}
						className="navbar__navbar-brand-logo"
						alt="M F logo"
					/>
				</div>
				<div className="nav-list">
					<a href="#about">About</a>
					<a href="#portfolio">Projects</a>
					<span/>
					<a href="#technologies">Tech</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		</nav>
	);
}
