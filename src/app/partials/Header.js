import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import github from '../../images/github.svg';

export const Header = (props) => {

    return (
        <header className="header">
          <nav className="container">
            <ul className="nav">
              <div className="nav__group">
                <li className="nav__link"><NavLink to="/">Home</NavLink></li>
                <li className="nav__link"><NavLink to="/about">About</NavLink></li>
                <li className="nav__link"><NavLink to="/">Episodes</NavLink></li>
              </div>
              <li className="nav__link"><a href="www.github.com" target="_blank"><img src={github} alt="logo"  className="nav__icon"></img></a></li>
            </ul>
          </nav>
          <NavLink to="/"><img src={logo} alt="logo" className="logo"></img></NavLink>
        </header>
    );
}