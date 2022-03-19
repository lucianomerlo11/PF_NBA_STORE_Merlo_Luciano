import React from 'react';
import logo from '../resources/images/IMG_NBA_STORE_ICON.png';
import Cart from '../Cart/CartComponent';
import ItemListContainerComponent from './ItemListContainer/ItemListContainer';
function NavbarComponent() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light' style={{background: 'red'}}>
            <div className='container-fluid'>
                <a className='navbar-brand align-items-center' href='#'>
                    <img src={logo} alt='' width='35' height='35' className='me-1 d-inline-block align-text-top'></img>
                    NBA Store
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ItemListContainerComponent></ItemListContainerComponent>
                </div>
                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <Cart></Cart>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;
