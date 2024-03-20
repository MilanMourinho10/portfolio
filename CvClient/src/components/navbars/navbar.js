import React from "react";
import  './navbar.css';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="desktopMenu">
            <Link to="/" className="dektopMenuListItem">Main Page</Link>
            <Link to="/contact" className="dektopMenuListItem">Contact</Link>
            
        </div>
    </nav>
  )
}

export default Navbar