// npm packages
import React from "react";
import PropTypes from "prop-types";

function ListItem({ item, itemType }) {
	const imageObject = require(`../../assets/img/icons/${item.icon}`);
	const imageURL = imageObject.default;
	return (
		<label htmlFor="icon-name" className="icon-name">
			<img
				src={imageURL}
				className={"icon" + itemType}
				alt={"icon of"+ item.name}
			/>
			{item.label}
		</label>
	);
}
ListItem.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string,
	itemType: PropTypes.string,
	name: PropTypes.string,
};
export default ListItem;
