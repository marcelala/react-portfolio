// npm packages
import React from "react";
import PropTypes from "prop-types";

export default function Pills({ data }) {
	const pillList = data.map((tech) => {
		return (
			<span>
				<li className="pill-container">{tech}</li>
			</span>
		);
	});
	return <ul className="pills">{pillList}</ul>;
}

Pills.propTypes = {
	data: PropTypes.array,
	tech: PropTypes.string,
};
