
// npm packages
import React from "react";

export const Pills = ({ props }) => {

	const pillList = props.techUsed.map((key, tech) => {

		<li><span key={tech.index} className="pill-container">{tech}</span></li>;
	});
		return (
		<ul>
			{pillList}
		</ul>
	)
}
