/**
 * Authors: Ryan Montoya, Arsen Shintemirov, Roman Antipov
 * TCSS 445
 * Spring 2022
 */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                            HOME
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/about' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            ABOUT
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/typeterms' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            SPELL TYPES
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/schoolterms' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            SCHOOLS
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink exact to='/classterms' 
                        activeClassName="active" 
                        className="nav-links" 
                        onClick={handleClick}>
                            CLASSES
                        </NavLink>
                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default NavBar;