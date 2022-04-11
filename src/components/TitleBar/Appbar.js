import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Rightarrow } from "../../assets/RightArrow.svg";
import './Appbar.css'
const Appbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">MULTIQOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
 
          <Nav  className="justify-content-end navmenu">
            <Nav.Link href="#home">Company</Nav.Link>
            <Nav.Link href="#solutions">Solutions</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#hiresolutions">Hire Solutions</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#industries">Industries</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
           
            <Button variant="outline-light" classname="navbutton">
              ContactUs <Rightarrow />
            </Button>
         
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Appbar;
