import React from "react";
import {Col, Nav} from "react-bootstrap";

const Navbar = (props) => {
    return (
        <div>
            <Nav  variant="pills" className='flex-column mt-2'>
                <Nav.Item>
                    <Nav.Link eventKey={props.id}>{props.name}</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Navbar;