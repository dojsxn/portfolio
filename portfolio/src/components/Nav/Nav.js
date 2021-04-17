import React from 'react';
import './Nav.scss';
import { Navbar, Nav } from 'react-bootstrap';


export const navBar = ()=>{
	return(
<div>
	<Navbar className="nav" expand="lg">
		<Navbar.Brand href="#home">jasondo</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/about">About</Nav.Link>
				<Nav.Link href="/projects">Work</Nav.Link>
				<Nav.Link href="/contact">Contact</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
</div>
	)
}

export default navBar;
