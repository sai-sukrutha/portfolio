import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import {Route,Routes} from "react-router-dom";

// import About from "./components/About";
// import Skills from './components/Skills';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Projects from './components/pages/Projects';
import { ErrorPage } from './components/ErrorPage';


// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Menu />
      </header> */}

      <Menu/>

      <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} /> */}
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<ErrorPage/>} />
      </Routes>

    </div>
  );
}

export default App;
