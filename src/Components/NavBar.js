import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = (props) => {
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
export default NavBar;