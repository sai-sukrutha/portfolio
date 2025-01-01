// import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import './App.scss';

function App() {
  return (
    <div className="App">

      <Menu/>
      <Home />

      {/* <RouterProvider router={router} /> */}
      {/* <Routes>
      <Route path='/' element={<Home />} />
        // <Route path='/about' element={<About />} />
        // <Route path='/skills' element={<Skills />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/education' element={<Education />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<ErrorPage/>} />
      </Routes> */}

    </div>
  );
}

export default App;
