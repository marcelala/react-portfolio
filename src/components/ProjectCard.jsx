// npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
//project files
import Modal from "./Modal";
export default function ProjectCard({ project }) {
	const {title, thumbnail, isReleased,index}= project
	const [isActive, setActive] = useState(false);
	const thumbnailObject = require(`../assets/img/project-images/thumbnails/${thumbnail}`);
	const thumbnailURL = thumbnailObject.default;
	return (
		<li>
			<button disabled={!isReleased} onClick={() => setActive(true)}>
				<label htmlFor="project-title" className="project-title">
					{!isReleased && (
						<div className="overlay">
							<h3>Coming soon</h3>
						</div>
					)}
					<img
						src={thumbnailURL}
						className={"thumbnail" + index}
						alt={"thumbnail of project" + title}
					/>
					<h3>{title}</h3>
				</label>
			</button>
			{isActive&& (
				<Modal project={project} handleClose={() => setActive(false)} isActive={isActive} />
			)}
		</li>
	);
}

ProjectCard.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
	project: PropTypes.object,
};