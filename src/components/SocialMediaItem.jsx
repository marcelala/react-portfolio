// npm packages
import React from "react";
import PropTypes from "prop-types";

function SocialMediaItem({ props }) {
	const imageObject = require(`../assets/icons/${props.fileName}`);
	const imageURL = imageObject.default;
	return (
		<div className="item social-media-item">
			<label htmlFor="icon-url" className="icon-url">
				<img
					src={imageURL}
					className="icon tech-icon"
					alt={"logo of the brand" + props.name}
				/>
				{props.url}
			</label>
		</div>
	);
}

SocialMediaItem.propTypes = {
	filename: PropTypes.string,
	url: PropTypes.string,
};

export default SocialMediaItem;
