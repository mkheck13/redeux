import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Page 1</Nav.Link>
            <Nav.Link as={Link} to={'/pageTwo'}>Page 2</Nav.Link>
            <Nav.Link as={Link} to={'/pageThree'}>Page 3</Nav.Link>
            <Nav.Link as={Link} to={'/pageFour'}>Page 4</Nav.Link>
            <Nav.Link as={Link} to={'/pageFive'}>Page 5</Nav.Link>

           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;