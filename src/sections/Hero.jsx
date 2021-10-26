import React from "react";
//project files
import TypedText from "../components/anti-requirements/TypedText";
import wallpaper from "../assets/img/grass.jpg";

export default function Hero() {
	return (
		<div className="background">
			<div className="hero" id="hero">
				<img className="background__image" src={wallpaper} alt="background" />
				<div className="hero-text-box">
					<span className="h1">Hello, I'm </span>
					<span className="h1 h1-name"> Marcela Fortis</span>
					<h2 className="h2-sub">
						<TypedText />
					</h2>
				</div>
				<div className="hero-btn-box">
					<a href="#About" className="btn btn--brown">
						Get to know me
					</a>
				</div>
			</div>
		</div>
	);
}
