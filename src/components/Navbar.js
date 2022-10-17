import React from "react";
import '../style/navbar.css';
// --------------------------------------------
import Logo from "../images/logo.png";
import Globe from "../images/globe.png";
import Bulb from "../images/bulb.png";
// --------------------------------------------

function Navbar(){
return(
    <navbar>
        <img src={Logo} alt="Logo"/>
        <img src={Globe} alt="Logo"/>
        <p>File</p>
        <p>Edit</p>
        <div className="tut">
            <img src={Bulb} alt="Logo"/>
            <p>Tutorials</p>
        </div>
        <div className="project-name">
            <p>New Project</p>
        </div>
    </navbar>
)
}

export default Navbar;