import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    return (
        <div className="NavBar">
            <Navbar className="NavBar-BG"expand="lg" variant="light">
                <Container>
                    <h4>Multi-Destination Travel Optimizer</h4>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
