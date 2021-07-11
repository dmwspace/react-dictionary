import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav variant="pills" 
                activeKey="dictionary"
                dialogClassName="header"
            >
                <Nav.Item>
                    <LinkContainer to="/dictionary">
                        <Nav.Link><h1>Dictionary</h1></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/thesaurus">
                        <Nav.Link><h1>Thesaurus</h1></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </Navbar>


    )
}
export default Header 