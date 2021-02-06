import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/dictionary"><h1>Dictionary</h1></Link>
            <Link to="/thesaurus"><h1>Thesaurus</h1></Link>
        </header>
    )
}
export default Header 