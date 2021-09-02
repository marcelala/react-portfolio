// npm packages
import React from "react";
import PropTypes from "prop-types";

function Card({ props }) {
    const thumbnailObject = require(`../assets/project-images/thumbnails/${props.thumbnail}`);
	const picture = require(`../assets/project-images/pictures/${props.fileName}`);

    const thumbnailURL = thumbnailObject.default;
    const pictureURL = picture.default;

	return (
		<li>
			<label htmlFor="project-title" className="project-title">
				<img
					src={thumbnailURL}
					className={"thumbnail" + props.index}
					alt={"thumbnail of project" + props.tile}
				/>
				{props.title}
			</label>
		</li>
	);
}

Card.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
};

export default Card;
