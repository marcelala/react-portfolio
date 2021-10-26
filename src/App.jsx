import React from "react";
//project files
import "./styles/index.scss";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

function App() {

	return (
		<div className="App">
			<Navigation />
			<Hero />
			<About />
			<Projects/>
			<Tech />
			<Skills/>
			<Contact />
		</div>
	);
}
export default App;
