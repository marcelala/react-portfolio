// npm packages
import React from "react";
import PropTypes from "prop-types";

function ListItem({ item, itemType, text }) {
	const imageObject = require(`../assets/img/icons/${item.name}`);
	const imageURL = imageObject.default;
	return (
		<li>
			<label htmlFor="icon-name" className="icon-name">
				<img
					src={imageURL}
					className={"icon" + itemType}
					alt={"logo of the brand" + item.name}
				/>
				{text}
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
