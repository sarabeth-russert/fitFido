import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Fit Fido</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/add">Add Food</Nav.Link>
          <Nav.Link href="/track">Track Calories</Nav.Link>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile">Create Profile</NavDropdown.Item>
            <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Pet 1</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Image id="bone" src="./bone.png" fluid />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

{/* <Form inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2" />
<Button variant="outline-info">Search</Button>
</Form> */}

export default NavBar

{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Fit Fido</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#add">Add Food</Nav.Link>
    </Nav>
    <Nav>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#profile">Create Profile</NavDropdown.Item>
        <NavDropdown.Item href="#login">Log In</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}


