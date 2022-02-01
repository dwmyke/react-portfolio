import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
