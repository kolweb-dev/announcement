import React from "react";
import {Link, NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {

    return (
        <div className='container'>
            <nav className="menu">
                <ul className="menu__list">
                    <li>
                        <NavLink
                            className='menu__list-link'
                            to="/"
                            activeClassName="active"
                            exact
                        >Main Page</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='menu__list-link'
                            to="/apple"
                            activeClassName="active"
                        >Apple</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='menu__list-link'
                            to="/bitcoin"
                            activeClassName="active"
                        >Bitcoin</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className='menu__list-link'
                            activeClassName="active"
                            to="/tesla"
                        >Tesla</NavLink>
                    </li>
                </ul>
            </nav>
            <div className='header-line'/>
        </div>
    )
}

export default Header;