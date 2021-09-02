// npm packages
import React from "react";
import reactDom from "react-dom";
import PropTypes from "prop-types";

import TitleAndDescription from "./TitleAndDescription";
import Pills from "./Pills";
import { Button } from "react-scroll";

export default function Modal({ project, handleClose }) {
	const { title, text, picture, index, repo, url, techUsed } = project;
	const screenshot = require(`../assets/img/project-images/pictures/${picture}`);
	const pictureURL = screenshot.default;
	const closeIcon = require(`../assets/img/icons/close.svg`);

	return reactDom.createPortal(
		<label htmlFor="project-title" className="project-title">
			<div className="overlay" onClick={handleClose} />
			<article className="project-modal">
				<img
					src={pictureURL}
					className={"thumbnail" + index}
					alt={"thumbnail of project" + title}
				/>
				<Button theme={"icon"}> {closeIcon} </Button>
				<TitleAndDescription title={title} description={text} />
				<Pills data={techUsed} />
				<a href={url}>
					<Button theme={"primary"}>Website</Button>
				</a>
				<a href={repo}>
					<Button theme={"secondary"}>Git repository</Button>
				</a>
			</article>
		</label>,
		document.getElementById("portal")
	);
}

Modal.propTypes = {
	project: PropTypes.object,
	picture: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	url: PropTypes.string,
    repo: PropTypes.string,
    techUsed: PropTypes.array,
};
