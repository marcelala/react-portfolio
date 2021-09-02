import React from "react";
import projectData from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import TitleAndDescription from "../components/reusables/TitleAndDescription";

export default function Projects() {
	const sectionHeader = {
		title: "Projects",
		description:
			"These are some of my past projects and also the projects I will develop during the Frontend Academy at Novare Potential 2021.",
	};
	const Projects = projectData.map((item,index) => (
		<ProjectCard project={item} key={index} />
	));
	return (
		<section className="projects">
			<TitleAndDescription text={sectionHeader} />
			<div className="projects-list">{Projects}</div>
		</section>
	);
}
