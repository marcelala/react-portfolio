import React from "react";
//project files
import techData from "../data/techData";
import List from "../components/reusables/List";
import TechItem from "../components/TechItem";

import TitleAndDescription from "../components/reusables/TitleAndDescription";

export default function Tech() {
	const sectionHeader = {
		title: "Technologies",
		description: "Some of the technology that I like to use are:",
	};
	return (
		<section className="technologies" id="tech">
			<TitleAndDescription text={sectionHeader} />
			<List array={techData} Component={TechItem} />
		</section>
	);
}
