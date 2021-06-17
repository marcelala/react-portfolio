import React from "react";

import Background from "./Background.jsx";
import TypedText from "./TypedText.jsx";


export default function Header(props) {
return(
    <section className="header">
        <Background/>
        <div className="header__content">
        <div className="header__text-box">
			<h1 className="heading-primary">
				<span className="heading-primary--main">Hello, I'm   </span> <span className= "heading-primary--name"> Marcela Fortis</span>
				<span className="heading-primary--sub"><TypedText/></span>
			</h1>
		</div>
		<div className="header__btn-box">
			<a href="#" className="btn btn--brown">Get to know me</a>
		</div>
        </div>
        </section>
)
}