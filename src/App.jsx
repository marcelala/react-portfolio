import React from "react";
import "./styles/css/index.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Contact from "./sections/Contact";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
			<About />
			<Tech />
			<Contact/>
		</div>
	);
}
export default App;
