import React, {useState} from "react";
//project files
import projectData from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import TitleAndDescription from "../components/reusables/TitleAndDescription";
import ProjectModal from "../components/ProjectModal";
import Modal from "../components/reusables/Modal";

export default function Projects() {
	// local state
	const [modal, setModal] = useState(null);
	const sectionHeader = {
		title: "Projects",
		description:
			"These are some of my past projects and also the projects I will develop during the Frontend Academy at Novare Potential 2021.",
	};
	const Projects = projectData.map((project, index) => (
		<ProjectCard project={project} key={index} onClick={() => setModal(ProjectModal({project, setModal}))} />
	));
	return (
		<section className="projects" id="projects">
			<TitleAndDescription text={sectionHeader} />
			<ul className="projects-list">{Projects}</ul>
			<Modal modal={modal}/>
		</section>
	);
}
