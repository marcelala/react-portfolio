import React from "react";
import PropTypes from "prop-types";

export default function List({ props }) {
	const items = props.children;
	const List = items.map((item, index) => (
		<li key={"listItem-" + index} className={props.itemType}>
			{item}
		</li>
	));
	return <ul>{List}</ul>;
}
List.propTypes = {
	itemType: PropTypes.string,
	url: PropTypes.string,
	children: PropTypes.object,
};
