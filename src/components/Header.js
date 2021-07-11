import React from "react";
import {Link} from "react-router-dom";
import {Tabs, Tab} from "react-bootstrap";

function Header() {
    return (
        <Tabs defaultActiveKey="dictionary">
            <Tab eventKey="dictionary" title="Dictionary">
                <Link to="/dictionary"></Link>
            </Tab>
            <Tab eventKey="thesaurus" title="Thesaurus">
                <Link to="/thesaurus"></Link>
            </Tab>
        </Tabs>
    )
}
export default Header 