import "./styles/css/index.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
	return (
		<div className="App">
			<Nav/>
			<Hero />
			<About/>
		</div>
	);
}
export default App;
