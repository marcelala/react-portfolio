import React from "react";

import TypedText from "../components/anti-requirements/TypedText";

export default function Hero(props) {
	return (
		<section className="hero">
			<div className="hero__content">
				<div className="hero__text-box">
					<h1 className="heading-primary">
						<span className="heading-primary--main">Hello, I'm </span>{" "}
						<span className="heading-primary--name"> Marcela Fortis</span>
						<span className="heading-primary--sub">
							<TypedText />
						</span>
					</h1>
				</div>
				<div className="hero__btn-box">
					<a href="#About" className="btn btn--brown">
						Get to know me
					</a>
				</div>
			</div>
		</section>
	);
}
