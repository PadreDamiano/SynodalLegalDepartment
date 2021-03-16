import React from "react";
import {Nav, NavDropdown} from "react-bootstrap";


const NavBar = (props) => {
    return (
        <NavDropdown.Item href={props.id}>{props.name}</NavDropdown.Item>
    )
}
export default NavBar;

