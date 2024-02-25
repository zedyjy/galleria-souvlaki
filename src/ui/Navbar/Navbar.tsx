import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="App">
            {/* Navbar */}

            <div className={`topnav ${showMenu ? 'show-menu' : ''}`}>
                <Link to="/" className="brand">
                    Galleria Souvlaki
                </Link>

                <Link to="/" className="active">
                    Home
                </Link>
                <Link to="/exhibitions" className="active">
                    Exhibitions
                </Link>
                <Link to="/articles" className="active">
                    Articles
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
