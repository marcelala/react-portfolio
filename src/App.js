import './sass/main.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
