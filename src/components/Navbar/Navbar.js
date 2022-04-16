import React from 'react';
import logo from '../resources/images/IMG_NBA_STORE_ICON.png';
import Cart from '../Cart/CartComponent';
import {Link, NavLink} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import bootstrap from 'bootstrap';
import './Navbar.css'
function NavbarComponent() {
    const {category} = useParams();
    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid menu'>
                <NavLink to='/' className='navbar-brand align-items-center'>
                    <img src={logo} alt='' width='35' height='35' className='me-1 d-inline-block align-text-top'></img>
                    NBA Store
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link navBtn'>Indumentaria</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/category/zapatillas' className='nav-link navBtn'>Zapatillas</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/category/accesorios' className='nav-link navBtn'>Accesorios</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <NavLink to={'/cart'}><Cart></Cart></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;
