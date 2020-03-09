import React, { useState } from 'react';
import { Navbar } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const CustomNavbar = () => {
    const [route, setRoute] = useState('/');
    const [canRedirect, setCanRedirect] = useState(false);

    if (canRedirect) {
       return <Redirect to={route} />
    }

    function handleClick(link) {
        setRoute(link);
        setCanRedirect(true);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Nail Art</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Login
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;