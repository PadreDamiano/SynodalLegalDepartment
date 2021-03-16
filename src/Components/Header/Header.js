import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from './logo.png';
import NavBar from "../NavBar/NavBar";

const Header = (props) => {

    let diocese = props.store.diocese.map(el => <NavBar name={el.name} id={`/diocese/${el.id}`}/>);
    let region = props.store.region.map(el => <NavBar  name={el.name} id={`/region/${el.id}`}/>);
        return (
            <>
                <Navbar
                    collapseOnSelect
                        expand='md'
                    bg="light" variant="light">
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
                                <NavDropdown title="Єпархії" id="collasible-nav-dropdown">
                                    {diocese}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/diocese">Всі єпархії</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Області" id="collasible-nav-dropdown">
                                    {region}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/region">Всі області</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/actual'>Актуальні засідання</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
}

export default Header;