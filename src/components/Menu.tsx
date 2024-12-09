// import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './styles/Menu.scss';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// Navbar with bootstrap - Working
// const Menu = () => {
//   return (
//     <Navbar expand="lg" bg="warning" variant="dark">
//       <Container>
//         <Navbar.Brand href="/"> Sai Sukrutha </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav variant="underline" className="justify-content-end" activeKey="/home" as="ul"
//               defaultActiveKey="/home">   {/* TODO: Not Aligning to the right */}
//             {/* <Nav.Item as="li">
//                 <Nav.Link href="/about" eventKey="about">About</Nav.Link>  
//             </Nav.Item> */}
//             <Nav.Item as="li">
//                 <Nav.Link href="/experience" eventKey="experience">Experience</Nav.Link>
//                 {/* NOTE: href is used for routing. eventKey is useful to keep the current selected item */}
//             </Nav.Item>
//             <Nav.Item as="li">
//                 <Nav.Link href="/education" eventKey="education">Education</Nav.Link>
//             </Nav.Item>
//             {/* <Nav.Item as="li">
//                 <Nav.Link href="/skills" eventKey="skills">Skills</Nav.Link>
//             </Nav.Item> */}
//             <Nav.Item as="li">
//                 <Nav.Link href="/projects" eventKey="projects">Projects</Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//   );
// };
// Bootstrap sloe=wing down the website

// Using simple rendering and Reactor router Links
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className="brand">Sai Sukrutha</Link>  {/* TODO: Add Brand image SS*/}
          {/* NOTE: This is Link and not NavLink as we don't want it to be highlighted when clicked*/}
        </li>
        {/* <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='./skills'>Skills</NavLink>
        </li> */}
        <li>
          <NavLink to='/experience'>Experience</NavLink>
        </li>
        <li>
          <NavLink to='/education'>Education</NavLink>
        </li>
        <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;