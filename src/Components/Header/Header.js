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
                                <Nav.Link href='/observe'>Відстеження</Nav.Link>
                                <Nav.Link href='/actual'>Актуальні засідання</Nav.Link>
                                {/*<NavDropdown title="Єпархії" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/diocese/kyiv">Киівська</NavDropdown.Item>
                                    <NavDropdown.Item href="/diocese/chernigov">Чернігівська</NavDropdown.Item>
                                    <NavDropdown.Item href="/diocese/odessa">Одеська</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Інші</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Області" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/region/kyiv">Київська</NavDropdown.Item>
                                    <NavDropdown.Item href="/region/chernigov">Чернігівська</NavDropdown.Item>
                                    <NavDropdown.Item href="/region/odess  a">Одеська</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Інші</NavDropdown.Item>
                                </NavDropdown>*/}
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Пошук" className=" mr-sm-2"/>
                                <Button variant='outline-info'>Пошук</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;