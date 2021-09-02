// npm packages
import React from "react";

export default function Pills({ props }) {
	const pillList = props.techUsed.map((key, tech) => {
		return (
			<span key={tech.index} className="pill-container">
				{tech}
			</span>
		);
	});
	return <ul>{pillList}</ul>;
}
