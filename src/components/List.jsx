import React from "react";

export default function List({ props }) {
	const items = props.items;
	const List = items.map((item,index) => <li key={"listItem-" + index}>{item}</li>);
	return (
		<div className="list">
			<ul>{List}</ul>
		</div>
	);
}
