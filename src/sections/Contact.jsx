//npm packages
import React from "react";
//project files
import contactData from "../data/contactData";
import socialData from "../data/socialData";
import List from "../components/reusables/List";
import TitleAndDescription from "../components/reusables/TitleAndDescription";

export default function Contact() {
	const currentYear = new Date().getFullYear();
	const sectionHeader = {
		title: "Let's work together",
		description:
			"Here is my contact information in case you would like to start a collaboration.",
	};

	const socialList = socialData.map((item, index) => {
		const imageObject = require(`../assets/img/icons/${item.icon}`);
		const imageURL = imageObject.default;
		return (
			<li key={index}>
				<a href={item.name}>
					<label htmlFor="icon-name" className="icon-name">
						<img src={imageURL} alt={"icon of " + item.label} />
						<span className="label">{item.label}</span>
					</label>
				</a>
			</li>
		);
	});

	return (
		<div className="contact-info">
			<section className="contact" id="contact">
					<TitleAndDescription text={sectionHeader} />
						<List array={contactData} itemType={"contactItem"} />
			</section>
			<footer>
				<div className="social-list">
					<ul>{socialList}</ul>
				</div>
				<p className="copyright">
					© Marcela Felix Fortis {"   "} {currentYear}
				</p>
			</footer>
		</div>
	);
}
