import React from "react";
import Typed from "react-typed";

export default function TypedText(){
		return (
			<div className="wrap">
				<div className="type-wrap">
					<Typed
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