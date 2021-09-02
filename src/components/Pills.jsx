// npm packages
import React from "react";

export default function Pills({ data }) {
	const pillList = data.map((tech) => {
		return (
			<span key={tech.index} className="pill-container">
				{tech}
			</span>
		);
	});
	return <ul>{pillList}</ul>;
}
