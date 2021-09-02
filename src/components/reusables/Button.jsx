// npm packages
import React from "react";

const Button = ({ handleClick, props }) => {
	return (
		<button className={"btn-" + props.theme} type="button" onClick={handleClick}>
			{props.children}
		</button>
	);
};

export default Button;
