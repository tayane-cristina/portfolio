import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pizzaghost' element={<PizzaGhost />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
