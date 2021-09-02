import React from "react";

import data from "../data/data";
import MyPhoto from "../assets/img/about.png";
import TitleAndDescription from "../components/reusables/TitleAndDescription";

export default function About() {
	const { aboutMe } = data;

	return (
		<section className="about">
			<div className="row">
				<div className="col-1-of-2">
					<TitleAndDescription title="Who am I?" description={aboutMe} />
				</div>
				<div className="col-1-of-2">
					<img src={MyPhoto} alt="woman" className="about__image" />
				</div>
			</div>
		</section>
	);
}
