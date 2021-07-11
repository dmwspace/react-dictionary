import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" bsPrefix="footer">
            <Nav variant="pills">
                <h3 style={{textJustify: "right", color: "grey"}}>Powered by WordsAPI</h3>
            </Nav>
        </Navbar>
    )
}
export default Footer