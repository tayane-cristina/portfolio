import './App.css';
import Header from './components/headerComponent/Header';
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
