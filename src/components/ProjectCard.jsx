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
				{!isReleased && (
					<div className="overlay">
						<h3>Coming soon</h3>
					</div>
				)}
				<label htmlFor="project" className="project-card-label">
					<img
						src={thumbnailURL}
						className={"thumbnail"}
						alt={"thumbnail of" + project.title}
					/>
					<span>
						<p className="project-title">{title}</p>
					</span>
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
