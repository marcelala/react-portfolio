// npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
//project files
import Modal from "./Modal";
import ProjectModal from "./ProjectModal";
export default function ProjectCard({ project }) {
	const [isActive, setActive] = useState(false);
	const thumbnailObject = require(`../assets/img/project-images/thumbnails/${project.thumbnail}`);
	const thumbnailURL = thumbnailObject.default;
	return (
		<li>
			<button disabled={!project.isReleased} onClick={() => setActive(true)}>
				<label htmlFor="project-title" className="project">
					{!project.isReleased && (
						<div className="overlay">
							<h3>Coming soon</h3>
						</div>
					)}
					<img
						src={thumbnailURL}
						className={"thumbnail"}
						alt={"thumbnail of" + project.title}
					/>
					<h3>{project.title}</h3>
				</label>
			</button>

			<Modal
				handleClose={() => setActive(false)}
				active={isActive}>
				<ProjectModal project={ project}/>
			</Modal>
		</li>
	);
}

ProjectCard.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
	techUsed: PropTypes.array,
};