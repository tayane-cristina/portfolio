import './App.css';
import About from './components/projects/pages/About';
import Home from './components/projects/pages/Home';
import Projects from './components/projects/pages/Projects';
import Footer from './components/projects/pages/Footer'
import PizzaGhost from './components/projects/pizzaGhost/PizzaGhost';

/*
  <Home />
  <About />
  <Projects />
  <Footer />
*/

function App() {
  return (
    <div className="App">
      <PizzaGhost />
    </div>
  );
}

export default App;
