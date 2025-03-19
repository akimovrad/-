import React from 'react';
import logo from '../../img/logo.png'
import './header.scss'


const Header = () => {
    return (
        <div>
            <header className='header container'>
                <div className="header-img">
                    <img src={logo} alt="" />
                </div>
                <div className="header-link">
                    <p>Docs</p>
                    <p>About</p>
                    <button>SUPPORT US</button>
                </div>
            </header>
        </div>
    );
}

export default Header;
