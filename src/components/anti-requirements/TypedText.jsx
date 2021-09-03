import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";

class TypedText extends Component {
	render() {
		return (
			<div className="wrap">
				<div className="type-wrap">
					<Typed
						typedRef={(typed) => {
							this.typed = typed;
						}}
						strings={[
							"Fullstack Developer",
							"Web Developer",
							"Software Engineer",
							"Front End Developer",
						]}
						typeSpeed={40}
						loop
					/>
				</div>
			</div>
		);
	}
}
export default TypedText;
