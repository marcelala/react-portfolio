// npm packages
import React from "react";
import PropTypes from "prop-types";

function TechItem({ props }) {
	const imageObject = require(`../assets/icons/${props.fileName}`);
	const imageURL = imageObject.default;
	return (
		<div className="tech-item">
			<label htmlFor="icon-name" className="icon-name">
				<img
					src={imageURL}
					className="icon tech-icon"
					alt={"logo of the brand" + props.name}
				/>
				{props.name}
			</label>
		</div>
	);
}

TechItem.propTypes = {
	filename: PropTypes.string,
	name: PropTypes.string,
};

export default TechItem;
