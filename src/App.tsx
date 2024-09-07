import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import {Route,Routes} from "react-router-dom";
// import About from "./components/About";
// import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// TODO: Delete .css files
// TODO: Use My Icon instead of name in header

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/skills' element={<Skills />} /> */}
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
