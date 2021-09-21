// npm packages
import React from "react";
import PropTypes from "prop-types";
export default function ProjectCard({ project, onClick }) {
	const { thumbnail, isReleased, title } = project;
	const thumbnailObject = require(`../assets/img/project-images/thumbnails/${thumbnail}`);
	const thumbnailURL = thumbnailObject.default;
	return (
		<li className="project-card">
			<button disabled={isReleased === false} onClick={onClick}>
				<div>
				{!isReleased && (
					<div className="overlay">
						Coming soon
					</div>
				)}
					<img
						src={thumbnailURL}
						className={"thumbnail"}
						alt={"thumbnail of" + project.title}
					/>
					</div>
						{title}
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
