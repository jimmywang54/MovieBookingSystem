import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="/main">footer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Footer;
