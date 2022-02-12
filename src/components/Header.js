import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" sticky="top" variant="light" className="py-4 shadow-5 navbar" collapseOnSelect>
            <Container fluid="md" style={{fontFamily: "Roboto"}}>
                <Navbar.Brand href="/portfolio" style={{fontSize:"26px", color: "white", borderBottom:"2px solid white", padding:"0 10px"}}>Raushan Kurmangali</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{padding: "0 10px"}}
                        navbarScroll
                    >
                        <Nav.Link href="#about" className="link">About</Nav.Link>
                        <Nav.Link href="#projects" className="link">Projects</Nav.Link>
                        <Nav.Link href="#skills" className="link">Skills</Nav.Link>
                    </Nav>
                    <Button 
                        href="#contact" 
                        className="d-flex" 
                        variant="warning" 
                        size="md"
                        style={{margin: "0 10px", maxWidth: "25vw", justifyContent: "center"}}
                    >
                        Contact Me
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;