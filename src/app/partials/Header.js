import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export const Header = (props) => {

    return (
        <header className="header">
          <Link to="/"><img src={logo} alt="logo" className="logo"></img></Link>
        </header>
    );
}