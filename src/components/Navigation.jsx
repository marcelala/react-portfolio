import React from "react";
import Logo from "../assets/img/logos/MF-white.png";

export default function Navigation() {
	return (
		<nav className="nav">
				<a href="#hero" className="desktop-logo">
					<img src={Logo} alt="Letters MF" />
					{" "}
					<span className="owner"> Marcela Felix Fortis </span>
				</a>
			<ul className="nav-list">
				<li>
					<a href="#about" className={"nav-link"}>
						About
					</a>
				</li>
				<li>
					<a href="#projects" className={"nav-link"}>
						Projects
					</a>
				</li>
				<li className="mobile-logo">
					<a href="#hero">
						<img src={Logo} alt="Letters MF" />
					</a>
				</li>
				<li>
					<a href="#tech" className={"nav-link"}>Tech</a>
				</li>
				<li>
					<a href="#contact" className={"nav-link"}>Contact</a>
				</li>
			</ul>
		</nav>
	);
}
