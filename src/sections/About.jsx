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
					<TitleAndDescription text={aboutText} />
					<img src={MyPhoto} alt="woman" className="about-image" />
		</section>
	);
}
