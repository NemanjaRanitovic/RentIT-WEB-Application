import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg ="primary" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">RentIT</Navbar.Brand>
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
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>                 
          </Nav>          
          <Nav className="position-absolute top-50 start-50 translate-middle">  
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"              
                aria-label="Search"
                />        
            </Form>
            </Nav> 
            <Nav className="position-absolute bottom-0 start-100 me-auto">
            <NavDropdown title="Nemanja" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Action
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