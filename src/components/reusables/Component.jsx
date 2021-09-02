// npm packages
import React from "react";
import PropTypes from "prop-types";
import TitleAndDescription from "./TitleAndDescription";
import List from "./List";

function Component({ text, arrayToIterate, children }) {
	return (
		<div className="component">
			<TitleAndDescription text={text} />
			<List array={arrayToIterate} itemType={children} />
		</div>
	);
}

Component.propTypes = {
	itemType: PropTypes.object,
	children: PropTypes.object,
    text: PropTypes.object,
    arrayToIterate: PropTypes.array,
};

export default Component;
