import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, Collapse, NavbarToggler } from "reactstrap";

export const AppNav = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <Navbar className="main-navbar" light expand="md">
            <NavbarBrand tag={Link} to="/">
                <img src="/public/imgs/lightning-app.png" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar isOpen={open}>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Graph
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
