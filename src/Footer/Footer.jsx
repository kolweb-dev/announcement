import React from "react";

import './Footer.css';
import {NavLink} from "react-router-dom";


const Footer = () => {

    return (
        <footer className="footer">
            <div className='container footer__inner'>
                <div className="footer__left">
                    <div className="footer__nav">
                        <NavLink
                            className='footer__nav-link'
                            to="/"
                            activeClassName="active"
                            exact
                        >Main Page</NavLink>

                        <NavLink
                            className='footer__nav-link'
                            to="/apple"
                            activeClassName="active"
                        >Apple</NavLink>

                        <NavLink
                            className='footer__nav-link'
                            to="/bitcoin"
                            activeClassName="active"
                        >Bitcoin</NavLink>


                        <NavLink
                            className='footer__nav-link'
                            activeClassName="active"
                            to="/tesla"
                        >Tesla</NavLink>
                    </div>
                    <p>TkachukDev &copy; 2021</p>
                </div>


                <div className="footer-right">
                    <NavLink className='footer__link'
                             to={{pathname: "https://www.facebook.com/profile.php?id=100014281056377"}} target="_blank"><i
                        className="fa fa-facebook" aria-hidden="true"/></NavLink>
                    <NavLink className='footer__link'
                             to={{pathname: "https://www.linkedin.com/in/mykola-tkachuk-75218220a"}} target="_blank"><i
                        className="fa fa-linkedin" aria-hidden="true"/></NavLink>
                    <NavLink className='footer__link' to={{pathname: "https://github.com/kolweb-dev"}}
                             target="_blank"><i className="fa fa-git" aria-hidden="true"/></NavLink>
                    <NavLink className='footer__link' to={{pathname: "https://www.instagram.com/kolya_tkachuk13/"}}
                             target="_blank"><i className="fa fa-instagram" aria-hidden="true"/></NavLink>
                </div>
            </div>
        </footer>
    );
}
export default Footer;