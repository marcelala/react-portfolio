import React from "react";
import PropTypes from "prop-types";

export default function List({ props }) {
	const items = props.chilren;
	const List = items.map((item, index) =>
		<li key={"listItem-" + index}
			className={props.itemType}
		>{item}</li>);
	return (
		<div className="list">
			<ul>{List}</ul>
		</div>
	);
}
List.propTypes = {
	item: PropTypes.object,
	itemType: PropTypes.string,
	url: PropTypes.string,
};