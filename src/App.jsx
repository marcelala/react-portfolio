import React from "react";
//project files
import "./styles/css/index.css";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";
import Contact from "./sections/Contact";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Hero />
			<About />
			<Projects />
			<Tech />
			<Contact />
		</div>
	);
}
export default App;
