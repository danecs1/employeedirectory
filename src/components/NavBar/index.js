import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';



function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <Link className='navbar-brand' to='/'>
                Home
            </Link>


            <div>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/About'
                            className={window.location.pathname === '/all' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </Link>
                    </li>


                    <li className='nav-item'>
                        <Link
                            to='/employees'
                            className={window.location.pathname === '/all' ? 'nav-link active' : 'nav-link'}
                        >
                            Employees
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;