import React from "react";
import Logo from "../assets/img/logos/MF-white.png";

export default function Nav() {
	/*<div className="nav-brand">
		<img src={Brand} className="nav-brand-logo" alt="M F logo" />
	</div>
<div className="owner">Marcela Felix Fortis</div>*/
	return (
		<nav className="nav">
			<ul className="nav-list">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#hero">
						<img src={Logo} alt="Letters MF" />
					</a>
				</li>
				<div />
				<li>
					<a href="#technologies">Tech</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
