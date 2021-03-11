import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from './logo.png';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect
                        expand='md'
                        bg='dark'
                        variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo}
                                 height='86'
                                 width='60'
                                 className='display-inline-block align-top'
                                 alt='UOC'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Додому</Nav.Link>
                                <Nav.Link href='/diocese'>Єпархії</Nav.Link>
                                <Nav.Link href='/region'>Області</Nav.Link>
                                <Nav.Link href='/observe'>Додати</Nav.Link>
                                <Nav.Link href='/actual'>Актуальні засідання</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;