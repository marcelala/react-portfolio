import React from "react";

import TypedText from "../components/anti-requirements/TypedText";
import wallpaper from "../assets/img/grass1.jpg";

export default function Hero(props) {
	return (
		<div className="background">
			<section className="hero">
				<img className="background__image" src={wallpaper} alt="background" />
				<div className="hero-text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">Hello, I'm </span>
						{"  "}
						<span className="heading-primary--name"> Marcela Fortis</span>
						<span className="heading-primary--sub">
							<TypedText />
						</span>
					</h1>
				</div>
				<div className="hero-btn-box">
					<a href="#About" className="btn btn--brown">
						Get to know me
					</a>
				</div>
			</section>
		</div>
	);
}
