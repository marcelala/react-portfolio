import React from "react";
import Logo from "../assets/img/logos/MF-white.png";

export default function Navigation() {
	return (
		<nav className="nav">
			<ul className="nav-list">
				<li className="desktop-logo">
					<a href="#hero">
						<img src={Logo} alt="Letters MF" />
							{" "}
							<h3 className="owner">Marcela Felix Fortis</h3>
					</a>
				</li>
				<li>
					<a href="#about">
						<p>About</p>
					</a>
				</li>
				<li>
					<a href="#projects">
						<p>Projects</p>
					</a>
				</li>
				<li className="mobile-logo">
					<a href="#hero">
						<img src={Logo} alt="Letters MF" />
					</a>
				</li>
				<li>
					<a href="#tech"><p>Tech</p></a>
				</li>
				<li>
					<a href="#contact"><p>Contact</p></a>
				</li>
			</ul>
		</nav>
	);
}
