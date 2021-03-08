import React, {Component} from 'react';
import {Container, Navbar} from 'react-bootstrap';
import logo from './logo.png';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo}
                                 height='86'
                                 width='60'
                                 className='display-inline-block align-top'
                                 alt='UOC'
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;