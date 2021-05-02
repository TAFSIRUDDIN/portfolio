import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const NavbarSmall = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Tafsir Uddin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#">What I do</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarSmall;