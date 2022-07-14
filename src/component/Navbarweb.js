import React from 'react';
import ReactDom from 'react-dom';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import '../css/styleweb.css';
import logo from '../image/logo2.png';
import About from './About.js';
import Blog from './Blog.js';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Navbarweb(props) {
   
  
    return (
        <div className="navbarcontent">
        
        <Navbar expand="lg" fixed="top" className="bgColor" variant="light">
  <Container >
    <Navbar.Brand  as="h2" className="text-white display-4" href="#home" style={{fontSize:35}}>Bhaaa Chbani
    
  {/*<img
        src={logo}
        width="300"
        height="150"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />*/} 
    
    
    
    </Navbar.Brand>
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto p-2" variant="light">
        <Nav.Link className="text-white"> <Link to="/"  className="text-white"style={{  textDecoration: "none"}}>Home

         
         
        </Link> 
        
        
        
        
        </Nav.Link>
        <Nav.Link  className="text-white">   <HashLink smooth to="/#category"  className="text-white" style={{  textDecoration: "none"}}>Category Video</HashLink></Nav.Link>
        <Nav.Link  className="text-white">   <HashLink smooth to="/#tool"  className="text-white" style={{  textDecoration: "none"}} >Tool</HashLink></Nav.Link>
        <Nav.Link  className="text-white" >    <Link to="/blog"  className="text-white" style={{  textDecoration: "none"}}>Blogs</Link></Nav.Link>
{/*       
        <NavDropdown title="Categoury" id="basic-nav-dropdown" className="bg-primary text-white" style={{color:'white'}}>
          <NavDropdown.Item href="#action/3.1">Nft</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">learning</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Mony</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Technonlogy</NavDropdown.Item>
        </NavDropdown> */}

        <Nav.Link  className="text-white">
        
        
        
           
        <HashLink smooth to="/#about"  className="text-white" style={{  textDecoration: "none"}}>About</HashLink>
         
         
         
         </Nav.Link>
        <Nav.Link  className="text-white" >   
        <HashLink smooth to="/#contact"  className="text-white" style={{  textDecoration: "none"}}>Contact</HashLink>
         </Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>

<br /><br /><br />
  
         </div>

    );
  }
  export default Navbarweb;