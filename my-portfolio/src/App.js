import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Quiz from './components/projects/quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Footer />
      <Quiz />
    </div>
  );
}

export default App;
