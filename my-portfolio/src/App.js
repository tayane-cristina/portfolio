import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Quiz from './components/projects/quiz/Quiz';
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
