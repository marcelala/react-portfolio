// npm packages
import React, { useState } from "react";
import PropTypes from "prop-types";
//project files
import Modal from "./Modal";
function Card({ project }) {
	const [isActive, setActive] = useState(false);
	const thumbnailObject = require(`../assets/project-images/thumbnails/${project.thumbnail}`);
	const thumbnailURL = thumbnailObject.default;
	return (
		<li key={project.index}>
			<button disabled={!project.isReleased} onClick={() => setActive(true)}>
				<label htmlFor="project-title" className="project-title">
					{!project.isReleased && (
						<div className="overlay">
							<h3>Coming soon</h3>
						</div>
					)}
					<img
						src={thumbnailURL}
						className={"thumbnail" + project.index}
						alt={"thumbnail of project" + project.title}
					/>
					<h3>{project.title}</h3>
				</label>
			</button>
			{isActive&& (
				<Modal project={project} handleClose={() => setActive(false)} />
			)}
		</li>
	);
}

Card.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
	project: PropTypes.object,
	isReleased: Boolean,
};
export default Card;
