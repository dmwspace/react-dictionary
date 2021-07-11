import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav} from "react-bootstrap";

function Header() {
    return (
        <Nav variant="tabs" activeKey="dictionary">
            <Nav.Item>
                <LinkContainer to="/dictionary">
                    <Nav.Link>Dictionary</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/thesaurus">
                    <Nav.Link>Thesaurus</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    )
}
export default Header 