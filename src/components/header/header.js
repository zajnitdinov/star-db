import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <span className="logo"><Link to='/'>StarDB</Link></span>
            <ul className="menu d-flex">
                <li className="menu-item d-flex"><Link to='/people/'>People</Link></li>
                <li className="menu-item d-flex"><Link to="/planets/">Planets</Link></li>
                <li className="menu-item d-flex"><Link to="/starships/">Starships</Link></li>
            </ul>
        </div>
    )
};

export default Header;
