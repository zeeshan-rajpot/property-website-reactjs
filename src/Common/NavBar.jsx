// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Whatsapp from "../images/Component 26 – 1.svg";
import logoimg from "../../src/images/Mask Group 1.svg";

import Offcanvas from "react-bootstrap/Offcanvas";

function Navbars() {
  return (
    <>
      <div className="NavbarMobile">
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3 navbar"
            style={{ backgroundColor: "white" }}
          >
            <Container bg="light" variant="light">
              <Navbar.Brand as={Link} to="/">
                <img src={logoimg} />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <NavLink to="/Home">
                      <p className="nav-link" style={{fontSize:'18px'}}>In Prop</p>
                    </NavLink>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 ">
                    {/* <NavLink to="/">
                    <span className="nav-link navpaddingright">
                      <p> In Prop</p>
                    </span>
                  </NavLink> */}
                    <NavLink to="/PropertiesPage">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}> Properties Page</p>
                      </span>
                    </NavLink>
                    <NavLink to="/Acosites">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>Associate</p>
                      </span>
                    </NavLink>
                    <NavLink to="/ProjectPage">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}>ProjectPage</p>
                      </span>
                    </NavLink>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 search-box "
                        aria-label="Search"
                        size="300"
                      />
                    </Form>

                    <NavLink to="/Login">
                      <span className="nav-link navpaddingright">
                        <p style={{fontSize:'18px'}}> Sign In /Signup</p>
                      </span>
                    </NavLink>

                  
                    <div>
                      <img src={Whatsapp} alt="" />{" "}
                      <span style={{ fontSize: "12px", color: "#BABABA" }}>
                        Whatsapp
                      </span>{" "}
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default Navbars;
