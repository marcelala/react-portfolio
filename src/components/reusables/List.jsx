import React from "react";
import PropTypes from "prop-types";
import ListItem from "../reusables/ListItem"

export default function List({ array, itemType}) {
	const List = array.map((item, index) => (
		<li className={itemType}>
			<ListItem item={item} itemType={itemType} key={index}/>
		</li>
	));
	return <ul>{List}</ul>;
}
List.propTypes = {
	array: PropTypes.array,
	itemType: PropTypes.string,
};
