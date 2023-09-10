import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contacts />
    </div>
  );
}

export default App;
