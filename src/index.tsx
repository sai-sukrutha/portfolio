import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Projects from './components/pages/Projects';
import { ErrorPage } from './components/ErrorPage';

// Updated from BrowserRouter to RouterProvider(new in react-router-dom)
const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,       // TODO: Add App as / here as Menu also need to be inside RouterProvider(Hence we need to add Menu in every page)
    errorElement: <ErrorPage />
  }, 
  {
    path: '/experience',
    element: <Experience />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/projects',
    element: <Projects />,
  }
]);


      {/* <Routes>
      <Route path='/' element={<Home />} />
        // <Route path='/about' element={<About />} />
        // <Route path='/skills' element={<Skills />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/education' element={<Education />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='*' element={<ErrorPage/>} />
      </Routes> */}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <Menu /> */}
  //   {/* <RouterProvider router={router} />
  // </React.StrictMode>

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
