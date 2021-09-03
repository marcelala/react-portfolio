import React from "react";
//project files
import techData from "../data/techData";
import List from "../components/reusables/List";
import TitleAndDescription from "../components/reusables/TitleAndDescription";

export default function Tech() {
	const sectionHeader = {
		title: "Technologies I Use",
		description: "Some of the techology that I like to use:",
	};
	return (
		<section className="technologies" id="tech">
			<TitleAndDescription text={sectionHeader} />
			<List array={techData} itemType={"techItem"} />
		</section>
	);
}
