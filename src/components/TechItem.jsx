// npm packages
import React from "react";
import PropTypes from "prop-types";

function TechItem({ item }) {
	const imageObject = require(`../assets/img/icons/"${item.icon}"`);
	const imageURL = imageObject.default;
	return (
		<div className="tech-item" key={item.index}>
			<label htmlFor="icon-name" className="icon-name">
				<img
					src={imageURL}
					className="icon tech-icon"
					alt={"logo of the brand" + item.label}
				/>
				{item.label}
			</label>
		</div>
	);
}
TechItem.propTypes = {
	icon: PropTypes.string,
	name: PropTypes.string,
};
export default TechItem;
