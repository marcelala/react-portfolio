// npm packages
import React from "react";
import PropTypes from "prop-types";

function ContactItem({ props }) {
	const imageObject = require(`../assets/icons/${props.fileName}`);
	const imageURL = imageObject.default;
	return (
		<div className="item contact-item">
			<label htmlFor="icon-contact" className="label-icon-contact">
				<img
					src={imageURL}
					className="icon contact-icon"
					alt={"logo of " + props.name}
				/>
				{props.url}
			</label>
		</div>
	);
}
