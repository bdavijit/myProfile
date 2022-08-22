import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
          <section className='abc'>
                <nav className='navBox'>
                      <NavLink className='NavLink' to='/'>
                            Home
                      </NavLink>
                      <NavLink className='NavLink' to='/Skills'>
                            Skills
                      </NavLink>
                      <NavLink className='NavLink' to='/Projects'>
                            Projects
                      </NavLink>
                      <NavLink className='NavLink' to='/Education'>
                            Education
                      </NavLink>
                      <NavLink className='NavLink' to='/Contact'>
                            Contact
                      </NavLink>
                </nav>
          </section>
    );
};

export default Navbar;