import "./styles/css/index.css";
import Nav from "./components/Nav";
import Hero from "./screens/Hero";
import About from "./screens/About";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
			<About />
		</div>
	);
}
export default App;
