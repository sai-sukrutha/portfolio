import React from 'react';
// import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Navbar with bootstrap - Working
const Menu = () => {
  return (
    <Navbar expand="lg" bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="/"> Sai Sukrutha </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="justify-content-end" activeKey="/home" as="ul"
              defaultActiveKey="/home">   {/* TODO: Not Aligning to the right */}
            {/* <Nav.Item as="li">
                <Nav.Link href="/about" eventKey="about">About</Nav.Link>  
            </Nav.Item> */}
            <Nav.Item as="li">
                <Nav.Link href="/experience" eventKey="experience">Experience</Nav.Link>
                {/* NOTE: href is used for routing. eventKey is useful to keep the current selected item */}
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/education" eventKey="education">Education</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item as="li">
                <Nav.Link href="/skills" eventKey="skills">Skills</Nav.Link>
            </Nav.Item> */}
            <Nav.Item as="li">
                <Nav.Link href="/projects" eventKey="projects">Projects</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

// TODO: This below works but menu orientation is vertical
// const Menu = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to='/'>SS</Link>
//         </li>
//         <li>
//           <Link to='/about'>About</Link>
//         </li>
//         <li>
//           <Link to='./skills'>Skills</Link>
//         </li>
//         <li>
//           <Link to='/experience'>Experience</Link>
//         </li>
//         <li>
//           <Link to='./projects'>Projects</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default Menu;