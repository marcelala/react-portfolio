import React from "react";
import PropTypes from "prop-types";

export default function List({ array, Component }) {
	const List = array.map((item, index) => (
		<Component item={item} key={index} />
	));
	return <ul>{List}</ul>;
}
List.propTypes = {
	array: PropTypes.array,
};
