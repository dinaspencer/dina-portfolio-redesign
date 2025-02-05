import { Link } from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar expand="md"  className="nav-main" sticky="top">
      {/* <div className="data-bs-theme=dark bg-body-tertiary"></div> */}
      <Container >
        <Navbar.Brand href="#" id="brand-header"><strong>DINA SPENCER</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="nav-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-items">
            {/* <Nav.Link className="nav-item"> */}
              
              <Link
                // activeClass="active"
                to="english"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="nav-item"
                    >
                      Autónomo Setup Kit
                      </Link>
                      {/* </Nav.Link> */}
            {/* <Nav.Link className="nav-item"> */}
           
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="nav-item"
                    >About</Link>
                    {/* </Nav.Link> */}
            {/* <Nav.Link className="nav-item"> */}
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="nav-item"
                    >Contact</Link>
                    {/* </Nav.Link> */}
            {/* <Nav.Link className="nav-item"> */}
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                className="nav-item">Blog</Link>
                    {/* </Nav.Link> */}
                    {/* {<Link
                activeClass="active"
                to="https://newsletter.dinaspencer.net"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-item"
                    >
                      English Coaching
                      </Link>} */}
                      <a href="https://english.dinaspencer.net" className="nav-item">English Coaching</a>
             
                    {/* </Nav.Link> */}
           {/* <Nav.Link className="nav-item"> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




// export default function NavBar2 () {

//     return (
//         <>
//         <section id="navbar-sticky">
//             <h1 id="header-name">DINA SPENCER</h1>
//         <ul className="navbar">
//             <li><Link
//                 activeClass="active"
//                 to="services"
//                 spy={true}
//                 smooth={true}
//                 // offset={-70}
//                 duration={500}
//                     >Services</Link></li>
//             <li><Link
//                 activeClass="active"
//                 to="dev-section"
//                 spy={true}
//                 smooth={true}
//                 // offset={-70}
//                 duration={500}
//                     >Projects</Link></li>
//             <li><Link
//                 activeClass="active"
//                 to="about"
//                 spy={true}
//                 smooth={true}
//                 // offset={-70}
//                 duration={500}
//                     >About</Link></li>
//             <li><Link
//                 activeClass="active"
//                 to="contact"
//                 spy={true}
//                 smooth={true}
//                 // offset={-70}
//                 duration={500}
//                     >Contact</Link></li>
//             <li><Link
//                 activeClass="active"
//                 to="blog"
//                 spy={true}
//                 smooth={true}
//                 // offset={-70}
//                 duration={500}
//                     >Blog</Link></li>
            
//         </ul>


        
//         </section>
//         </>
//     )
// }