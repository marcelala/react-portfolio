// npm packages
import React from "react";
import PropTypes from "prop-types";
import TitleAndDescription from "./TitleAndDescription";

function Component({ props }) {
	return (
        <div className="component">
            <TitleAndDescription title={props.title} description={props.description} />
            <List 
        </div>
	);
}

Component.propTypes = {
	filename: PropTypes.string,
	name: PropTypes.string,
	itemType: PropTypes.string,
	url: PropTypes.string,
};

export default Component;
