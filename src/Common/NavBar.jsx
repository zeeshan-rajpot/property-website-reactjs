// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';


import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbars() {
  return (
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 navbar" style={{ backgroundColor: 'white' }} >
          <Container  bg="light" variant="light">
            <Navbar.Brand href="#">InProp</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  InProp
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 ">
                  <Nav.Link href="#action1" className="pe-4"><b> Explore </b></Nav.Link>
                  <Nav.Link href="#action2"className="pe-4"> <b>New Properties </b></Nav.Link>
                  <Nav.Link href="#action3"className="pe-4"><b>Home </b></Nav.Link>
                  <Nav.Link href="#action4" className="pe-4"> <b>Link</b></Nav.Link>
                  <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search-box"
                    aria-label="Search"
                  />
                 
                </Form>
                  <Nav.Link href="#action5" className="pe-4"><b>Sign In </b></Nav.Link>
                  <Nav.Link href="#action6" className="pe-4"><b>Sign Up </b></Nav.Link>
                  
                </Nav>
                
             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbars;