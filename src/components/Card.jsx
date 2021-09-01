// npm packages
import React from "react";
import PropTypes from "prop-types";

function ListItem({ props }) {
	const imageObject = require(`../assets/icons/${props.fileName}`);
	const imageURL = imageObject.default;
	return (
		<li>
			<label htmlFor="icon-name" className="icon-name">
				<img
					src={imageURL}
					className={"icon" + props.itemType}
					alt={"logo of the brand" + props.name}
				/>
				{props.name}|| {props.url}
			</label>
		</li>
	);
}

ListItem.propTypes = {
	filename: PropTypes.string,
	name: PropTypes.string,
	itemType: PropTypes.string,
	url: PropTypes.string,
};

export default ListItem;
