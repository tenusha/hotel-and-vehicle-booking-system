import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';

class NavBar extends Component {

    render() {
        const username = this.props.username;
        return (
            <>
                <Navbar bg="light" expand="sm">
                    <Navbar.Brand href="/">Hackathon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {username ?
                                <NavDropdown title={username} id="nav-dropdown" className="dropdown-menu-right">
                                    <NavDropdown.Item onClick={() => toast.error("Not Supported Yet !")}>Account Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey="4.4">Sign out</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <>
                                    <Nav.Link href="" onClick={this.props.handleShow}>Sign In</Nav.Link>
                                    <Nav.Link href="/about">Join Now</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="row" style={{ alignItems: 'center', justifyContent: 'center', padding: "30px", width: '100%' }}>
                    <h2>Hackathon</h2>
                </div>

                <Navbar style={{ justifyContent: 'space-between' }} bg="dark" variant="dark" expand="sm">
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" data-collapsed="false">
                        <Nav className="mx-auto">
                            <Nav.Link href="/about">{'About Us'}</Nav.Link>
                            <Nav.Link href="/contact">{'Conotact Us'}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBar;