import React from 'react';
import logo from '../../images/logo.png';

export const Header = (props) => {

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"></img>
        </header>
    );
}