import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './offcanvasMenu.css'
import { NavLink } from 'react-router-dom';

export default class MenuOffcanvas extends React.Component {
    render() {
        return (
            <Menu className='menu-offcanvas-display' right>
                <NavLink to="/" activeclassname="active" target={'_parent'}>Home</NavLink>
                <NavLink to="/resume" target={'_parent'}>Resume</NavLink>
                <NavLink to="/portfolio" target={'_parent'}>Portfolio</NavLink>
                <NavLink to="/contact" target={'_parent'}>Contact</NavLink>
            </Menu>
          );
    }
}