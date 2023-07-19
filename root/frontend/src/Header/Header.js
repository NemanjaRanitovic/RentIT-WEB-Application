import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <Navbar bg ="primary" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to = "/"> RentIT </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <NavDropdown title="Vehicles" id="navbarScrollingDropdown">


              <NavDropdown.Item>
      
              </NavDropdown.Item>



              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>                 
          </Nav>          
          <Nav className="search-box">  
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"              
                aria-label="Search"
                />        
            </Form>
            </Nav> 
            <Nav className="profile-options">
            <NavDropdown title="Nemanja Ranitovic" id="navbarScrollingDropdown">
              <NavDropdown.Item>                
                <Link to = "/login">Log In </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                My rents
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log-out
              </NavDropdown.Item>
            </NavDropdown>  
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header