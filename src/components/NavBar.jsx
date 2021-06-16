import React from "react";
import WOW from "wow.js";

import Background from "./Background.jsx";
import  Brand  from "../assets/img/MF.png"


class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.about = React.createRef();
        this.skills = React.createRef();
		this.projects = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

componentDidMount(){
		new WOW().init();
	}

	navEffect(){
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var domBGRect = myBackground.getBoundingClientRect();
            var myBackground = document.getElementById("my-background");


			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance){
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}
    render() {
    return(
            <nav id="navbar" className="navbar">
					<div className="navbar__box">
						<a
							className="navbar__navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							 <img src={Brand} className="navbar__navbar-brand-logo" alt="M F logo"/>
						</a>
						<button
							className="navbar__toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar__toggler-icon"/>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar__nav">
								<a
									onClick={() => {
										this.scrolling(this.projects);
									}}
									className="navbar__nav-link">
									Projects
								</a>
								<a
									onClick={() => {
										this.scrolling(this.about);
									}}
									className="navbar__nav-link">
									About
								</a>
                                								<a
									onClick={() => {
										this.scrolling(this.skills);
									}}
									className="navbar__nav-link">
									Skills
								</a>
								<a
									onClick={() => {
										this.scrolling(this.contact);
									}}
									className="navbar__nav-link">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>
    )

}
}
export default NavBar;