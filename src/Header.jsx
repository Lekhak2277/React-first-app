import React from 'react'
import { Link } from 'react-router-dom';

function Header()
{
    return (<>
    <h1>Welcome to our website</h1>
    <ul>
    <Link to="/">
        <li>HOME</li>
    </Link>
    <Link to="/about">
        <li>ABOUT</li>
    </Link>
    </ul>
    <Link to="/"><p>HOME</p></Link>
    <Link to="/about"><p>ABOUT</p></Link>
   
    
    </>);
}

//HERE DEFAULT IS FOR EXPORTING A SINGLE FUNCTION 

export default Header;

//WHILE EXPORTING MULTIPLE FUNCTION WRITE LIKE THE BELOW CODE FOR EXAMPLE YOU ARE EXPORTING TWO FUNCTIONS MEANS

// export {header,footer}