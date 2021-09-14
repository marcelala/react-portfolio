// npm packages
import React from "react";
import PropTypes from "prop-types";
//project files
export default function ProjectCard({ project, onClick }) {
	const { thumbnail, isReleased, title } = project;
	const thumbnailObject = require(`../assets/img/project-images/thumbnails/${thumbnail}`);
	const thumbnailURL = thumbnailObject.default;
	return (
		<li>
			<button disabled={isReleased === false} onClick={onClick}>
				<label htmlFor="project-title" className="project">
					{!isReleased && (
						<div className="overlay">
							<h3>Coming soon</h3>
						</div>
					)}
					<img
						src={thumbnailURL}
						className={"thumbnail"}
						alt={"thumbnail of" + project.title}
					/>
					<h3>{title}</h3>
				</label>
			</button>
		</li>
	);
}

ProjectCard.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
	techUsed: PropTypes.array,
	isReleased: PropTypes.string,
};
