import React from "react";

import data from "../data/data";
import MyPhoto from "../assets/img/about.png";
import TitleAndDescription from "../components/reusables/TitleAndDescription";

export default function About() {
	const { aboutMe } = data;
	const aboutText = {
		"title": "Who Am I?",
		"description": [aboutMe],
	}
	return (
		<section className="about">
			<div className="row">
				<div className="col-1-of-2">
					<TitleAndDescription text={aboutText} />
				</div>
				<div className="col-1-of-2">
					<img src={MyPhoto} alt="woman" className="about__image" />
				</div>
			</div>
		</section>
	);
}
