import React from "react";

import data from "../data/data";
import me from "../assets/img/about.png";

export default function About() {
	const { aboutme } = data;

	return (
		<section className="about">
			<div className="row">
				<div className="col-1-of-2">
					<h1 className="heading-primary--main">
						<div className="u-align-center u-margin-bottom-big">About me</div>
					</h1>
					<p className="paragraph">{aboutme}</p>
				</div>
				<div className="col-1-of-2">
					<img src={me} alt="woman" className="about__image" />
				</div>
			</div>
		</section>
	);
}
