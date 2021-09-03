// npm packages
import React from "react";

const Button = ({ handleClick, children, theme }) => {
	return (
		<button className={"btn-" + theme} type="button" onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
