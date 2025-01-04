import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Experiences from './components/pages/Experiences';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Interests from './components/pages/Interests';
import { ErrorPage } from './components/ErrorPage';

// Updated from BrowserRouter to RouterProvider(new in react-router-dom)
const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,       // TODO: Add App as / here as Menu also need to be inside RouterProvider(Hence we need to add Menu in every page)
    errorElement: <ErrorPage />
  }, 
  {
    path: '/experiences',
    element: <Experiences />,
    errorElement: <ErrorPage />
  },
  {
    path: '/experiences/:experienceId',
    element: <Experience />,
    errorElement: <ErrorPage />
  },
  {
    path: '/education',
    element: <Education />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects/:projectId',
    element: <Project />,
    errorElement: <ErrorPage />
  },
  {
    path: '/interests',
    element: <Interests />,
    errorElement: <ErrorPage />
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
