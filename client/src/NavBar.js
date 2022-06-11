import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink exact to='/' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/about' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/typeterms' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            Spell Types
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/schoolterms' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            Schools
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/classterms' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            Classes
                        </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default NavBar;