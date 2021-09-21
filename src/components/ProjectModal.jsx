// npm packages
import React from "react";
import PropTypes from "prop-types";
//project files
import Button from "./reusables/Button";
import List from "./reusables/List";
import Pill from "./Pill";
import TitleAndDescription from "./reusables/TitleAndDescription";
import Pills from "./Pills";
import closeIcon from "../assets/img/icons/close.svg";

export default function ProjectModal({ project, setModal }) {
	const { title, text, picture, repo, url, techUsed } = project;
	const screenshot = require(`../assets/img/project-images/pictures/${picture}`);
	const pictureURL = screenshot.default;
	const projectHeader = {
		title: title,
		description: text,
	};
	return (
		<article className="project-modal">
			<button className="btn-close" onClick={() => setModal(null)}>
				<img src={closeIcon} alt="x" />
			</button>
			<img src={pictureURL} alt="thumbnail of project" className="modal-img" />
			<div className="half">
				<TitleAndDescription text={projectHeader} />
				<List array={techUsed} Component={Pill}/>
				<div className="btn-box">
					<a href={url}>
						<Button theme={"primary"}>Website</Button>
					</a>
					<a href={repo}>
						<Button theme={"secondary"}>Git repository</Button>
					</a>
				</div>
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
