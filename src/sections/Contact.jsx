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
	return (
		<section className="contact">
			<TitleAndDescription text={sectionHeader} />
			<div className="contact-list">
				<List array={contactData} itemType={"contactItem"} />
			</div>
			<footer>
				<div className="social-list">
					<List array={socialData} itemType={"socialItem"} />
				</div>
				<p className="copyright">Copyright © Marcela Felix Fortis {currentYear}</p>
			</footer>
		</section>
	);
}
