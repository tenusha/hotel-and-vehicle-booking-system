import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Search from './Search';

class NavBar extends Component {

    render() {
        const username = this.props.username;
        return (
            <>
                <Navbar bg="light" expand="sm">
                    <Navbar.Brand href="/">
                        <Image src={require("../../images/hackathon.png")} width='20%' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {username ?
                                <NavDropdown title={username} id="nav-dropdown" alignRight>
                                    <NavDropdown.Item onClick={() => toast.error("Not Supported Yet !")}>Account Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={this.props.logout}>Sign out</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <>
                                    <Nav.Link href="" onClick={this.props.handleLoginShow}>Sign In</Nav.Link>
                                    <Nav.Link href="" onClick={this.props.handleRegisterShow}>Join Now</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Search />

                <Navbar style={{ justifyContent: 'space-between' }} bg="dark" variant="dark" expand="sm">
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" data-collapsed="false">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">{'Home'}</Nav.Link>
                            <Nav.Link href="/about">{'About Us'}</Nav.Link>
                            <Nav.Link href="/contact">{'Contact Us'}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBar;