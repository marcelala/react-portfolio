// npm packages
import React from "react";
import PropTypes from "prop-types";
//project files
import Button from "./reusables/Button";
import TitleAndDescription from "./reusables/TitleAndDescription";
import Pills from "./Pills";

export default function ProjectModal({ project }) {
	const { title, text, picture, repo, url, techUsed } = project;
	const screenshot = require(`../assets/img/project-images/pictures/${picture}`);
	const pictureURL = screenshot.default;
	const projectHeader = {
		title: title,
		description: text,
	};
	return (
		<article className="modal">
			<img src={pictureURL} alt="thumbnail of project" />
			<TitleAndDescription text={projectHeader} />
			<Pills data={techUsed} />
			<div className="btn-box">
				<a href={url}>
					<Button theme={"primary"}>Website</Button>
				</a>
				<a href={repo}>
					<Button theme={"secondary"}>Git repository</Button>
				</a>
			</div>
		</article>
	);
}

ProjectModal.propTypes = {
	project: PropTypes.object,
	picture: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string,
	repo: PropTypes.string,
	techUsed: PropTypes.array,
};
